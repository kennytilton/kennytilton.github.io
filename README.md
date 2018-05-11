# Kenny Tilton on GitHub

Pardon the brevity, but I am just getting rolling with this page as an alternative to linking folks directly to [my GitHub account](https://github.com/kennytilton). Hmmm... how about an annotated *Table of Contents* for my repositories?

## Table of Contents
### New! A Hacker News &quot;Who is hiring?&quot; Browser
Check it [out](https://kennytilton.github.io/whoishiring/)! A sophisticated little search tool for the massive Hacker News monthly "Who is hiring?" question with hundreds of openings listed. Sophisticated but new with many features and refinements to go, but those will come only in response to issues raised [here](https://github.com/kennytilton/matrix/tree/master/js/matrix).
### New! The Flux Challenge&trade;
The Matrix takes on the [Challenge](https://github.com/kennytilton/flux-challenge/blob/master/submissions/kennytilton/README.md). In eighty-four SLOC.
### Dataflow (aka Reactive aka Constraints)
We stumbled onto this dataflow hack quite by accident, while working on a sticky UI layout problem back in 1996. A re-creation of that story is [here](http://smuglispweeny.blogspot.com/2017/06/the-making-of-cells-case-study-in-dumb.html).
In brief, we ended up with a tree of objects where selected properties could be expressed as formulas over other properties of other objects, as if our application were a spreadsheet. It could not be rules all the way down, of course: some properties were assigned to by event handlers. Any property could have an application-supplied observer to reflect changes in the "sheet" back to the outside world, say by disabling a widget via the widget API.

It was wonderful, a something-for-nothing silver bullet, and now we have ported it to JS and CLJS. (See below.)

#### Original [Cells](https://github.com/kennytilton/cells) -- Common Lisp
The original implementation of Cells, my spreadsheet-like dataflow library first shared in 1996. This is the one served by [quicklisp](https://www.quicklisp.org/beta/).
There is not much documentation other than the annotated tests, but one day in 2008 I dashed off a blog piece called [The Cells Manifesto](http://smuglispweeny.blogspot.com/2008/02/cells-manifesto.html) that turned out to be fairly comprehensive, including motivation, prior art, and the key definition of what I called "data integrity", a functional contract that pretty much just says "no [glitches](https://en.wikipedia.org/wiki/Reactive_programming#Glitches)".
Cells has been applied to substantial, enterprise-level applications, including a [clinical drug trial management system](http://smuglispweeny.blogspot.com/2008/03/my-biggest-lisp-project.html) and a Web-based [algebra learnng system](http://tiltonsalgebra.com/#). Each application is controlled in every respect by the Cells engine.

#### [Matrix](https://github.com/kennytilton/matrix) -- Independent CLJS and JS versions of Cells dataflow
#### [mxWeb](https://github.com/kennytilton/tag) -- Independent CLJS and JS versions of a Matrix-based web unframework
#### [mxXHR](https://github.com/kennytilton/xhr) -- Independent CLJS and JS (RSN) versions of Callback Hell solutions
#### [Micropipeline illustrator](https://github.com/kennytilton/kennytilton.github.io/blob/master/micropipeline/readme.md)
A fun JS mxWeb playground of micropipelines as described in Ivan Sutheland's Turing Award paper.
#### [TodoMX](https://github.com/kennytilton/todomx) -- The `TodoMVC Classic` in Matrix
Perhaps unwisely, my _TodoMX_ repo contains two separate and complete implmentations of the [TodoMVC](https://github.com/tastejs/todomvc/blob/master/app-spec.mdhttps://github.com/tastejs/todomvc/blob/master/app-spec.md) classic. One is [pure JS](https://github.com/kennytilton/todomx/tree/master/js/todomx), the other [ClojureScript(CLJS)](https://github.com/kennytilton/todomx/tree/master/cljs/todomx) all the way down. Each is offered purely as a proof of concept, the concept being:
> If one builds a Web framework atop a generic dataflow library supporting dynamic, transparent, "point" dependency tracking, and state change propagation, then declarative authoring and efficient DOM maintenance comes for free. More comprehensively and more efficiently, by the way, than with [ReactJS](https://reactjs.org).


