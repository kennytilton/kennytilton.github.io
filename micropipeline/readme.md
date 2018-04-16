# Micropipeline Illustrator
Micropipeline Illustrator (M/I) represents my poor, electronically untrained understanding of Figure 17 of Ivan Sutherland's Turing Award paper [Micropipelines](https://dl.acm.org/citation.cfm?id=63532). You can try it [here](https://kennytilton.github.io/micropipeline/). Reading on before doing so will help.

## Origins
Here is Figure 17:

![Figure 17](https://github.com/kennytilton/kennytilton.github.io/blob/master/micropipeline/public/pipe17.jpg) 

Whassat? Micropipelines achieve greater speed while simplifying circuit design by throwing off the tyranny of the clock. The above diagram shows how a pipeline of processing steps or *stages* can run unchecked--well, at their own internally regulated pace. `R(n)` and `A(n)` represent handshake requests and ACKs allowing each stage to execute as soon as its predecessor has finished. The win?

First, speed. If a stage does not require a full clock cycle, it does not need to sit idly about waiting for the next tick. Second, and not being a circuit designer I will take Dr. Sutherland's word on this, it makes circuit design a lot easier.

To learn more, I recommend reading at least the first few pages of the paper. Like Dr. Sutherland's [1963 PhD thesis](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-574.pdf) introducing us all to graphic interfaces, constraint programming, CAD, the micropipeline paper is quite readble.

## Using the illustrator
````
Caveat piper: This was just a fun few days exercise for me, so rough 
edges abound. Just reload the page when it stops working.
````

With that out of the way, here is how one might start exploring.

* Load/reload the [pipeline page](https://kennytilton.github.io/micropipeline/).
* Type 7

Notice that 7 now appears next to `D(in)`. That means we have placed 7 on the pipeline input data wire, which in fact is the data wire of the first stage of processing. Notice also the light green background of the corresponding REQ and ACK "wires". We will have multiple values in the pipeline and a bit of color will help keep straight what goes with what.

* Press `right arrow` to have the pipeline take a step. 

The horizontal line next to `R(in)` changes to a rising signal icon. One micropipeline win is treating any change, rising or falling, as equivalent signals. In this case, the external circuitry driving the pipeline would like the first stage register to capture the 7, so it signals on the REQ wire. It will wait until the register indicates it has done so by signalling rising or falling on the ACK wire.

````
The astute observer may notice that REQs and ACKs alternate sides. This recreates
the actual physical wiring of a circuit.
````

* Press `right arrow` to see the 7 captured by the first REG.
* Press `right arrow` to see the 7 ACKed by the first REG.
* Press `right arrow` to see the 7 processed by the first logic block and the result 8 placed on the next data wire, `D(2)`.
* Press `right arrow` to see `R(2)` signal to the next register that the 8 is available for capture..

I was tempted here to have change together the `D(2)` and `R(2)` signals that follow logic circuits. In one place the paper mentions putting the data on the wire *before* signalling the REQ to have it captured, but my reading is that that sequence is a defacto result of having a *simultaneous* REQ held back by a delaying circuit long enough for the logic to finish and deliver a result to its "out" data wire, such that data and REQ arrive bang-bang. All that said, the name "Illustrator" was chosen over "Simulator" for a reason, so I opted for emphasizing sequence over simultaneity.

* Press `right arrow` until a result appears to the left under *Results*

Dandy. Suggestions for a more interesting sequence of processes are very welcome. I also like the idea of displaying data as binary, including having a different number of bits at each stage as real micropipelines do.

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
* in parallel
* under user control, stepping, zooming, and stopping.
The sick solution was simple: multiple finite state machines (FSMs) with no inputs! Each started at state `init` and then moved on (or not) based on the outside world as it found it when triggered. A global `mTick` value allowed FSMs to notice when things had happened ("oh, my REQ tick is greater than my ACK tick? I have mail!").

The app as a whole then just had to move `mTick` one forward and sweep the application model triggering each FSM in the tree to animate all the stages and the pipeline itself in parallel.

What was dead interesting was that most pipeline players needed *two* FSMs, one each for inflow and outflow. For example, a stage had to look for REQs to capture data, and it had to look for ACKs of its own REQs. I saw straightaway that one FSM could not handle both.

Another trick was *holding back* the processing. In many places an FSM could easily do two things in one "tick" -- I got an REQ? OK, capture it and ACK it! -- but then the illustrator jumped forward, obfuscating the mechancs.

### Left as an exercise
* It might be fun to run a clocked illustrator alongside the unclocked micropipeline. We would need the typical distribution of logic processing durations to compare throughput differences to e expected in the wild.
* A completely different implementation could abandon illustration and go for emulation. We started using ClojureScript with core.async channels as the data/ACK/REQ wires. Much simpler since async channels provide the backpressure and blocking implemented here with state machines and the artificial tick count.





