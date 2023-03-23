/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';goog.module("goog.html.sanitizer.noclobber");
goog.module.declareLegacyNamespace();
var NodeType = goog.require("goog.dom.NodeType");
var googAsserts = goog.require("goog.asserts");
var userAgentProduct = goog.require("goog.userAgent.product");
function getterOrNull(className, property) {
  var ctor = goog.global[className];
  if (!ctor || !ctor.prototype) {
    return null;
  }
  var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, property);
  return descriptor && descriptor.get || null;
}
function prototypeMethodOrNull(className, method) {
  var ctor = goog.global[className];
  return ctor && ctor.prototype && ctor.prototype[method] || null;
}
var Methods = {ATTRIBUTES_GETTER:getterOrNull("Element", "attributes") || getterOrNull("Node", "attributes"), HAS_ATTRIBUTE:prototypeMethodOrNull("Element", "hasAttribute"), GET_ATTRIBUTE:prototypeMethodOrNull("Element", "getAttribute"), SET_ATTRIBUTE:prototypeMethodOrNull("Element", "setAttribute"), REMOVE_ATTRIBUTE:prototypeMethodOrNull("Element", "removeAttribute"), INNER_HTML_GETTER:getterOrNull("Element", "innerHTML") || getterOrNull("HTMLElement", "innerHTML"), GET_ELEMENTS_BY_TAG_NAME:prototypeMethodOrNull("Element", 
"getElementsByTagName"), MATCHES:prototypeMethodOrNull("Element", "matches") || prototypeMethodOrNull("Element", "msMatchesSelector"), NODE_NAME_GETTER:getterOrNull("Node", "nodeName"), NODE_TYPE_GETTER:getterOrNull("Node", "nodeType"), PARENT_NODE_GETTER:getterOrNull("Node", "parentNode"), CHILD_NODES_GETTER:getterOrNull("Node", "childNodes"), APPEND_CHILD:prototypeMethodOrNull("Node", "appendChild"), STYLE_GETTER:getterOrNull("HTMLElement", "style") || getterOrNull("Element", "style"), SHEET_GETTER:getterOrNull("HTMLStyleElement", 
"sheet"), GET_PROPERTY_VALUE:prototypeMethodOrNull("CSSStyleDeclaration", "getPropertyValue"), SET_PROPERTY:prototypeMethodOrNull("CSSStyleDeclaration", "setProperty")};
function genericPropertyGet(fn, object, fallbackPropertyName, fallbackTest) {
  if (fn) {
    return fn.apply(object);
  }
  var propertyValue = object[fallbackPropertyName];
  if (!fallbackTest(propertyValue)) {
    throw new Error("Clobbering detected");
  }
  return propertyValue;
}
function genericMethodCall(fn, object, fallbackMethodName, args) {
  if (fn) {
    return fn.apply(object, args);
  }
  if (userAgentProduct.IE && document.documentMode < 10) {
    if (!object[fallbackMethodName].call) {
      throw new Error("IE Clobbering detected");
    }
  } else {
    if (typeof object[fallbackMethodName] != "function") {
      throw new Error("Clobbering detected");
    }
  }
  return object[fallbackMethodName].apply(object, args);
}
function getElementAttributes(element) {
  return genericPropertyGet(Methods.ATTRIBUTES_GETTER, element, "attributes", function(attributes) {
    return attributes instanceof NamedNodeMap;
  });
}
function hasElementAttribute(element, attrName) {
  return genericMethodCall(Methods.HAS_ATTRIBUTE, element, "hasAttribute", [attrName]);
}
function getElementAttribute(element, attrName) {
  return genericMethodCall(Methods.GET_ATTRIBUTE, element, "getAttribute", [attrName]) || null;
}
function setElementAttribute(element, name, value) {
  try {
    genericMethodCall(Methods.SET_ATTRIBUTE, element, "setAttribute", [name, value]);
  } catch (e) {
    if (e.message.indexOf("A security problem occurred") != -1) {
      return;
    }
    throw e;
  }
}
function removeElementAttribute(element, attrName) {
  genericMethodCall(Methods.REMOVE_ATTRIBUTE, element, "removeAttribute", [attrName]);
}
function getElementInnerHTML(element) {
  return genericPropertyGet(Methods.INNER_HTML_GETTER, element, "innerHTML", function(html) {
    return typeof html == "string";
  });
}
function getElementStyle(element) {
  assertHTMLElement(element);
  return genericPropertyGet(Methods.STYLE_GETTER, element, "style", function(style) {
    return style instanceof CSSStyleDeclaration;
  });
}
function assertHTMLElement(element) {
  if (googAsserts.ENABLE_ASSERTS && !(element instanceof HTMLElement)) {
    throw new Error("Not an HTMLElement");
  }
}
function getElementsByTagName(element, name) {
  return Array.from(genericMethodCall(Methods.GET_ELEMENTS_BY_TAG_NAME, element, "getElementsByTagName", [name]));
}
function getElementStyleSheet(element) {
  assertHTMLElement(element);
  return genericPropertyGet(Methods.SHEET_GETTER, element, "sheet", function(sheet) {
    return sheet instanceof CSSStyleSheet;
  });
}
function elementMatches(element, selector) {
  return genericMethodCall(Methods.MATCHES, element, element.matches ? "matches" : "msMatchesSelector", [selector]);
}
function assertNodeIsElement(node) {
  if (googAsserts.ENABLE_ASSERTS && !isNodeElement(node)) {
    googAsserts.fail("Expected Node of type Element but got Node of type %s", getNodeType(node));
  }
  return node;
}
function isNodeElement(node) {
  return getNodeType(node) == NodeType.ELEMENT;
}
function getNodeName(node) {
  return genericPropertyGet(Methods.NODE_NAME_GETTER, node, "nodeName", function(name) {
    return typeof name == "string";
  });
}
function getNodeType(node) {
  return genericPropertyGet(Methods.NODE_TYPE_GETTER, node, "nodeType", function(type) {
    return typeof type == "number";
  });
}
function getParentNode(node) {
  return genericPropertyGet(Methods.PARENT_NODE_GETTER, node, "parentNode", function(parentNode) {
    return !(parentNode && typeof parentNode.name == "string" && parentNode.name && parentNode.name.toLowerCase() == "parentnode");
  });
}
function getChildNodes(node) {
  return genericPropertyGet(Methods.CHILD_NODES_GETTER, node, "childNodes", function(childNodes) {
    return childNodes instanceof NodeList;
  });
}
function appendNodeChild(parent, child) {
  return genericMethodCall(Methods.APPEND_CHILD, parent, "appendChild", [child]);
}
function getCssPropertyValue(cssStyle, propName) {
  return genericMethodCall(Methods.GET_PROPERTY_VALUE, cssStyle, cssStyle.getPropertyValue ? "getPropertyValue" : "getAttribute", [propName]) || "";
}
function setCssProperty(cssStyle, propName, sanitizedValue) {
  genericMethodCall(Methods.SET_PROPERTY, cssStyle, cssStyle.setProperty ? "setProperty" : "setAttribute", [propName, sanitizedValue]);
}
exports = {getElementAttributes:getElementAttributes, hasElementAttribute:hasElementAttribute, getElementAttribute:getElementAttribute, setElementAttribute:setElementAttribute, removeElementAttribute:removeElementAttribute, getElementInnerHTML:getElementInnerHTML, getElementStyle:getElementStyle, getElementsByTagName:getElementsByTagName, getElementStyleSheet:getElementStyleSheet, elementMatches:elementMatches, assertNodeIsElement:assertNodeIsElement, isNodeElement:isNodeElement, getNodeName:getNodeName, 
getNodeType:getNodeType, getParentNode:getParentNode, getChildNodes:getChildNodes, appendNodeChild:appendNodeChild, getCssPropertyValue:getCssPropertyValue, setCssProperty:setCssProperty, Methods:Methods};

;return exports;});
