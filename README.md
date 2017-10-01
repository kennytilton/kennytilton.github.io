# Kenny Tilton on GitHub

Pardon the brevity, but I am just getting rolling with this page as an alternative to linking folks directly to [my GitHub account](https://github.com/kennytilton). Hmmm... how about an annotated *Table of Contents* for my repositories?

## Table of Contents
### Dataflow (aka Reactive aka Constraints)
### [Cells](https://github.com/kennytilton/cells) -- Common Lisp
The original implementation of Cells, my spreadsheet-like dataflow library first shared in 1996. This is the one served by [quicklisp](https://www.quicklisp.org/beta/).
There is not much documentation other than the annotated tests, but one day in 2008 I dashed off a blog piece called [The Cells Manifesto](http://smuglispweeny.blogspot.com/2008/02/cells-manifesto.html) that turned out to be fairly comprehensive, including motivation, prior art, and the key definition of what I called "data integrity", a functional contract that pretty much just says "no [glitches](https://en.wikipedia.org/wiki/Reactive_programming#Glitches)".
Cells has been applied to substantial, enterprise-level applications, including a [clinical drug trial management system](http://smuglispweeny.blogspot.com/2008/03/my-biggest-lisp-project.html) and a Web-based [algebra learnng system](http://tiltonsalgebra.com/#). Each application is controlled in every respect by the Cells engine.
### [TodoFRP](https://github.com/kennytilton/todoFRP/tree/matrixjs) -- The `TodoMVC Classic` in Matrix*JS
Perhaps unwisely, the `matrixjs` branch of my fork of [TodoFRP]() contains two separate and complete implmentations of the [TodoMVC]() classic. One is [pure JS](https://github.com/kennytilton/todoFRP/tree/matrixjs/todo/MatrixJS), the other [ClojureScript(CLJS)](https://github.com/kennytilton/todoFRP/tree/matrixjs/todo/MatrixCLJS) all the way down. For hacking convenience, each contains full copies of the Matrix (ne Cells) and Tag (HTML/DOM) libraries. Each is offered purely as a proof of concept, the concept being:
> If one builds a Web framework atop a generic dataflow library supporting dynamic, transparent, "point" dependency tracking, and state change propagation, then declarative authoring and efficient DOM maintenance comes for free. More comprehensively and more efficiently, by the way, than with [ReactJS](https://reactjs.org).


