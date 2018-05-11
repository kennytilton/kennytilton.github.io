# Micropipeline Illustrator
Micropipeline Illustrator (M/I) represents my poor, electronically untrained understanding of Figure 17 of Ivan Sutherland's Turing Award paper [Micropipelines](https://dl.acm.org/citation.cfm?id=63532). You can try it [here](https://kennytilton.github.io/micropipeline/). Reading on before doing so will help.

## Origins
Here is Figure 17:

![Figure 17](https://github.com/kennytilton/kennytilton.github.io/blob/master/micropipeline/public/pipe17.jpg) 

Whassat? Micropipelines achieve greater speed while simplifying circuit design by throwing off the tyranny of the clock. The above diagram shows how a pipeline of processing steps or *stages* can run unchecked--well, at their own internally regulated pace. `R(n)` and `A(n)` represent handshake requests and ACKs allowing each stage to execute as soon as its predecessor has finished. The win?

First, speed. If a stage does not require a full clock cycle, it does not need to sit idly about waiting for the next tick. Second, and not being a circuit designer I will take Dr. Sutherland's word on this, it makes circuit design a lot easier.

To learn more, I recommend reading at least the first few pages of the paper. Like Dr. Sutherland's [1963 PhD thesis](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-574.pdf) -- introducing us all to graphic interfaces, constraint programming, and CAD -- the micropipeline paper is quite readable.

## Using the illustrator
````
Caveat piper: This was just a fun few days exercise for me, so rough 
edges abound. Just reload the page when it stops working.
````

With that out of the way, here is how one might start exploring.

* Load/reload the [pipeline page](https://kennytilton.github.io/micropipeline/).
* Hit the seven key 7. No need to figure out where. There is no where. The whole page listens to keyboard events.

Notice that 7 now appears next to `D(in)`. That means we have placed 7 on the pipeline input data wire, which in fact is the data wire of the first stage of processing. Notice also the light green background of the corresponding REQ and ACK "wires". We will have multiple values in the pipeline and a bit of color will help keep straight what goes with what.

* Press `right arrow` to have the pipeline take a step. 

The horizontal line next to `R(in)` changes to ![Rising](https://github.com/kennytilton/kennytilton.github.io/blob/master/micropipeline/public/tnRise.png), a rising signal icon.  One micropipeline win is treating any change, rising or falling, as equivalent signals. Normally a signal consists of one up and one down -- how verbose!

In this case, the external circuitry driving the pipeline would like the first stage register to capture the 7, so it has signalled on the REQ wire. It will wait until the register signals on the ACK wire before continuing.

````
The astute observer may notice that REQs and ACKs alternate sides at every
stage. This recreates the actual physical wiring of a circuit.
````

* Press `right arrow` to see the 7 captured by the first REG.
* Press `right arrow` to see the 7 ACKed by the first REG.
* Press `right arrow` to see the 7 processed by the first logic block and the result 8 placed on the next data wire, `D(2)`.
* Press `right arrow` to see `R(2)` signal to the next register that the 8 is available for capture..

I was tempted here to have the `D(2)` and `R(2)` signals change together if they are the outflow of logic circuits. Here is my thinking. In one place the paper mentions putting the data on the wire *before* signalling the capture REQ, but my reading is that that sequence is a defacto result of having a *simultaneous* REQ held back by a delaying circuit long enough for the logic to finish and deliver a result to its "out" data wire, such that data and REQ arrive bang-bang. Hence my temptation to illustrate simultaneity. All that said, the name "Illustrator" was chosen over "Simulator" for a reason, so I opted for emphasizing sequence over simultaneity.

* Press `right arrow` to see 8 pulled into the next register.
* Press `right arrow` until a result appears to the left under *Results*

At the last step, the demo driver spots the `R(out)` REQ and provides the `A(out)` ACK. Without the latter the pipeline would be frozen, unable for the last stage to capture new flow and quickly causing a logjam of backpressure.

````
Nota bene: the steps taken by the simulator are in no way akin to a clock cycle. 
They exist only and precisely to let us *step* through what would be a continuous
execution, for the purpose of illustration.
````
Now let us have some real fun.

* Type 3
* Type 4

We get backpressure from the pipeline! Here is a pop quiz:
````
How many right arrows will you have to press before you can get 4 into the pipeline?
Forget arrow counting. What conditions can you look for to determine when you can pipe a new value?
````
You now know everything I know about pipelines, including the misconceptions.
### Zoom zoom zoom
Let us knock our CPUs to their knees. Check the `Animation Commands` to the left on the demo page. We can have the pipeline run by itself on a sequence of random integers between zero and forty. 
* Reload the page
* Press `down arrow`
The pipeline should start chugging along. The most recent five values will appear under results.
* To make it go slower, press the `up arrow`.
* To make it go faster, press the `down arrow` again.
* To stop the beast, press `period` or `full-stop` as the Brits say.

````
Caveat piper I: if you make it go fast enough the `D(n)` values will stop appearing
                due to a CSS animation we have on those values.
Caveat piper II: switching between stepping and zooming sometimes works a little.
````

### Asynchronicity, the implementation
This was sick. The challenge was to get a system to run satisfying two constraints:
* in parallel, asynchronously, without threads; and
* under user control, stepping, zooming, and stopping.

The sick solution was simple: multiple finite state machines (FSMs) with no inputs! Each started at state `init` and then moved on (or not) based on the outside world as it found it when triggered. A global `mTick` value allowed FSMs to notice when things had happened ("oh, my REQ tick is greater than my ACK tick? I have mail!"). But until that happens, the particular FSM assigned to that bundle of wires remains in the same state, viz, looking for a fresh REQ. It is blocked but not blocking.

The app as a whole then just had to move `mTick` one forward and sweep the application model triggering each FSM in the tree to animate all the stages and the pipeline itself in parallel.

If you are like me, you would rather see some code. Here is the handler used by a stage to manage the input bundle of REQ, ACK, and data wires:

```` js
function stageInHandler( stage, is) {
    if (is === 'init') {
        if (stage.feeder.reqd()) {
            // for illustrative richness, do not capture in same tick as REQ
            if (stage.feeder.rq === mTick) {
                return 'capture'; // force a wait till the next tick
            }
            // ok, fine, we can just go ahead and capture
            stage.data = stage.feeder.data;
            return 'ack';
        }
    } else if (is === 'capture') {
        stage.data = stage.feeder.data;
        return 'ack';
    } else if (is === 'ack') {
        stage.feeder.ack();
        return 'process';
    } else if (is === 'process') {
        if ( stage.out.unackd()) {
            //clg('stagein> waiting for outAck', stage.name);
        } else {
            stage.out.data = {t: stage.data.t
                            , od: stage.data.od
                            , d: stage.process(stage.data.d)};
            return 'relay';
        }
    } else if (is === 'relay') {
        stage.out.req();
        return 'init';
    }
}
````

I found it interesting that most pipeline players needed *two* FSMs, one each for inflow and outflow. For example, a stage had to look for REQs to capture data, and it had to look for ACKs of its own REQs. I saw straightaway that one FSM could not handle both and remain a simple state machine.

Another trick was *holding back* the processing. In many places an FSM could easily do two things in one "tick" -- I got an REQ? OK, capture it and ACK it! -- but then the illustrator jumped forward two actions in one go, obfuscating the mechanics.

### Left as an exercise

* Suggestions for a more interesting sequence of processes are very welcome.
* I also like the idea of displaying data as binary bits, including having a different number of bits at each stage as real micropipelines do. JS limits us to 32bits, we can hide two integers behind a simulated 64-bit value.
* It might be fun to run a clocked illustrator alongside the unclocked micropipeline. We would need the typical distribution of logic processing durations to compare throughput differences to be expected in the wild.
* A completely different implementation could abandon illustration and go for emulation. We started using ClojureScript with core.async channels as the data/ACK/REQ wires. Much simpler since async channels provide the backpressure and blocking implemented here with state machines and the artificial tick count.
* OMG. The CSS. I may mave spent more time fighting that than creating the app. Needs work.

### More from or about Dr. Sutherland and his work
* *Sketchpad* demo [part I](https://youtu.be/USyoT_Ha_bA) and [part II](https://youtu.be/BKM3CmRqK2o)
* Computing and [fun](https://www.youtube.com/watch?v=FIMaf4RemOU)
* An excellent bit of [autobiography](https://youtu.be/vPsFPmgT0YM) on the occasion of his 2016 NIHF induction
* Two giants in [one video](https://youtu.be/aXVUoT_objA), Fred "Mythical Man-Month" Brooks and Ivan Sutherland





