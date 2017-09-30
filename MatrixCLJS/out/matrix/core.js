// Compiled by ClojureScript 1.9.671 {}
goog.provide('matrix.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('todo.matrix');
cljs.core.enable_console_print_BANG_.call(null);
todo.matrix.matrix_build_BANG_.call(null);
todo.matrix.start_router.call(null);
document.getElementById("tagroot").innerHTML = tiltontec.tag.html.to_html.call(null,todo.matrix.dom.call(null));

//# sourceMappingURL=core.js.map