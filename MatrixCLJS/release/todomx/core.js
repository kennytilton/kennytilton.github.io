// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.tag.html');
goog.require('todomx.matrix');
goog.require('javelin.core');
cljs.core.enable_console_print_BANG_();
todomx.matrix.matrix_build_BANG_();
document.getElementById("tagroot").innerHTML = tiltontec.tag.html.to_html(todomx.matrix.dom());
todomx.matrix.start_router();
