// Compiled by ClojureScript 1.9.671 {}
goog.provide('todomx.core');
goog.require('cljs.core');
goog.require('tiltontec.tag.html');
goog.require('todomx.matrix');
goog.require('javelin.core');
cljs.core.enable_console_print_BANG_.call(null);
todomx.matrix.matrix_build_BANG_.call(null);
document.getElementById("tagroot").innerHTML = tiltontec.tag.html.to_html.call(null,todomx.matrix.dom.call(null));
todomx.matrix.start_router.call(null);

//# sourceMappingURL=core.js.map