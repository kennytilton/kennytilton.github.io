/*TRANSPILED*/goog.provide("goog.html.sanitizer.HtmlSanitizer");
goog.provide("goog.html.sanitizer.HtmlSanitizer.Builder");
goog.provide("goog.html.sanitizer.HtmlSanitizerAttributePolicy");
goog.provide("goog.html.sanitizer.HtmlSanitizerPolicy");
goog.provide("goog.html.sanitizer.HtmlSanitizerPolicyContext");
goog.provide("goog.html.sanitizer.HtmlSanitizerPolicyHints");
goog.provide("goog.html.sanitizer.HtmlSanitizerUrlPolicy");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.functions");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.sanitizer.AttributeSanitizedWhitelist");
goog.require("goog.html.sanitizer.AttributeWhitelist");
goog.require("goog.html.sanitizer.CssSanitizer");
goog.require("goog.html.sanitizer.SafeDomTreeProcessor");
goog.require("goog.html.sanitizer.TagBlacklist");
goog.require("goog.html.sanitizer.TagWhitelist");
goog.require("goog.html.sanitizer.noclobber");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.html.sanitizer.HtmlSanitizerPolicyHints;
goog.html.sanitizer.HtmlSanitizerPolicyContext;
goog.html.sanitizer.HtmlSanitizerPolicy;
goog.html.sanitizer.HtmlSanitizerUrlPolicy;
goog.html.sanitizer.HtmlSanitizerAttributePolicy;
goog.html.sanitizer.HTML_SANITIZER_BOOKKEEPING_PREFIX_ = "data-sanitizer-";
goog.html.sanitizer.HTML_SANITIZER_SANITIZED_ATTR_NAME_ = goog.html.sanitizer.HTML_SANITIZER_BOOKKEEPING_PREFIX_ + "original-tag";
goog.html.sanitizer.HTML_SANITIZER_INVALID_CUSTOM_TAGS_ = {"ANNOTATION-XML":true, "COLOR-PROFILE":true, "FONT-FACE":true, "FONT-FACE-SRC":true, "FONT-FACE-URI":true, "FONT-FACE-FORMAT":true, "FONT-FACE-NAME":true, "MISSING-GLYPH":true};
goog.html.sanitizer.RANDOM_CONTAINER_ = "*";
goog.html.sanitizer.HtmlSanitizer = function(opt_builder) {
  goog.html.sanitizer.SafeDomTreeProcessor.call(this);
  var builder = opt_builder || new goog.html.sanitizer.HtmlSanitizer.Builder;
  builder.installPolicies_();
  this.attributeHandlers_ = goog.object.clone(builder.attributeWhitelist_);
  this.tagBlacklist_ = goog.object.clone(builder.tagBlacklist_);
  this.tagWhitelist_ = goog.object.clone(builder.tagWhitelist_);
  this.shouldAddOriginalTagNames_ = builder.shouldAddOriginalTagNames_;
  goog.array.forEach(builder.dataAttributeWhitelist_, function(dataAttr) {
    if (!goog.string.startsWith(dataAttr, "data-")) {
      throw new goog.asserts.AssertionError('Only "data-" attributes allowed, got: %s.', [dataAttr]);
    }
    if (goog.string.startsWith(dataAttr, goog.html.sanitizer.HTML_SANITIZER_BOOKKEEPING_PREFIX_)) {
      throw new goog.asserts.AssertionError('Attributes with "%s" prefix are not allowed, got: %s.', [goog.html.sanitizer.HTML_SANITIZER_BOOKKEEPING_PREFIX_, dataAttr]);
    }
    this.attributeHandlers_["* " + dataAttr.toUpperCase()] = goog.html.sanitizer.HtmlSanitizer.cleanUpAttribute_;
  }, this);
  goog.array.forEach(builder.customElementTagWhitelist_, function(customTag) {
    customTag = customTag.toUpperCase();
    if (!goog.string.contains(customTag, "-") || goog.html.sanitizer.HTML_SANITIZER_INVALID_CUSTOM_TAGS_[customTag]) {
      throw new goog.asserts.AssertionError("Only valid custom element tag names allowed, got: %s.", [customTag]);
    }
    this.tagWhitelist_[customTag] = true;
  }, this);
  this.networkRequestUrlPolicy_ = builder.networkRequestUrlPolicy_;
  this.styleContainerId_ = builder.styleContainerId_;
  this.currentStyleContainerId_ = null;
  this.inlineStyleRules_ = builder.inlineStyleRules_;
};
goog.inherits(goog.html.sanitizer.HtmlSanitizer, goog.html.sanitizer.SafeDomTreeProcessor);
goog.html.sanitizer.HtmlSanitizer.wrapUrlPolicy_ = function(urlPolicy) {
  return function(url, policyHints) {
    var trimmed = goog.html.sanitizer.HtmlSanitizer.cleanUpAttribute_(url);
    var safeUrl = urlPolicy(trimmed, policyHints);
    if (safeUrl && goog.html.SafeUrl.unwrap(safeUrl) != goog.html.SafeUrl.INNOCUOUS_STRING) {
      return goog.html.SafeUrl.unwrap(safeUrl);
    } else {
      return null;
    }
  };
};
goog.html.sanitizer.HtmlSanitizer.Builder = function() {
  this.attributeWhitelist_ = {};
  goog.array.forEach([goog.html.sanitizer.AttributeWhitelist, goog.html.sanitizer.AttributeSanitizedWhitelist], function(wl) {
    goog.array.forEach(goog.object.getKeys(wl), function(attr) {
      this.attributeWhitelist_[attr] = goog.html.sanitizer.HtmlSanitizer.cleanUpAttribute_;
    }, this);
  }, this);
  this.attributeOverrideList_ = {};
  this.dataAttributeWhitelist_ = [];
  this.customElementTagWhitelist_ = [];
  this.tagBlacklist_ = goog.object.clone(goog.html.sanitizer.TagBlacklist);
  this.tagWhitelist_ = goog.object.clone(goog.html.sanitizer.TagWhitelist);
  this.shouldAddOriginalTagNames_ = false;
  this.urlPolicy_ = goog.html.sanitizer.HtmlSanitizer.defaultUrlPolicy_;
  this.networkRequestUrlPolicy_ = goog.html.sanitizer.HtmlSanitizer.defaultNetworkRequestUrlPolicy_;
  this.namePolicy_ = goog.html.sanitizer.HtmlSanitizer.defaultNamePolicy_;
  this.tokenPolicy_ = goog.html.sanitizer.HtmlSanitizer.defaultTokenPolicy_;
  this.sanitizeInlineCssPolicy_ = goog.functions.NULL;
  this.styleContainerId_ = null;
  this.inlineStyleRules_ = false;
  this.policiesInstalled_ = false;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.allowDataAttributes = function(dataAttributeWhitelist) {
  goog.array.extend(this.dataAttributeWhitelist_, dataAttributeWhitelist);
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.allowCustomElementTags = function(customElementTagWhitelist) {
  goog.array.extend(this.customElementTagWhitelist_, customElementTagWhitelist);
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.allowFormTag = function() {
  delete this.tagBlacklist_["FORM"];
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.allowStyleTag = function() {
  if (this.inlineStyleRules_) {
    throw new Error("Rules from STYLE tags are already being inlined.");
  }
  delete this.tagBlacklist_["STYLE"];
  this.styleContainerId_ = goog.html.sanitizer.RANDOM_CONTAINER_;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.withStyleContainer = function(opt_styleContainer) {
  if ("STYLE" in this.tagBlacklist_) {
    throw new Error("STYLE tags must first be allowed through allowStyleTag.");
  }
  if (opt_styleContainer != undefined) {
    if (!/^[a-zA-Z][\w-:\.]*$/.test(opt_styleContainer)) {
      throw new Error("Invalid ID.");
    }
    this.styleContainerId_ = opt_styleContainer;
  } else {
    this.styleContainerId_ = null;
  }
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.inlineStyleRules = function() {
  if (this.sanitizeInlineCssPolicy_ == goog.functions.NULL) {
    throw new Error("Inlining style rules requires allowing STYLE attributes " + "first.");
  }
  if (!("STYLE" in this.tagBlacklist_)) {
    throw new Error("You have already configured the builder to allow STYLE tags in the " + "output. Inlining style rules would prevent STYLE tags from " + "appearing in the output and conflict with such directive.");
  }
  this.inlineStyleRules_ = true;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.allowCssStyles = function() {
  this.sanitizeInlineCssPolicy_ = goog.html.sanitizer.HtmlSanitizer.sanitizeCssDeclarationList_;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.alsoAllowTagsPrivateDoNotAccessOrElse = function(tags) {
  goog.array.forEach(tags, function(tag) {
    this.tagWhitelist_[tag.toUpperCase()] = true;
    delete this.tagBlacklist_[tag.toUpperCase()];
  }, this);
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.alsoAllowAttributesPrivateDoNotAccessOrElse = function(attrs) {
  goog.array.forEach(attrs, function(attr) {
    if (typeof attr === "string") {
      attr = {tagName:"*", attributeName:attr, policy:null};
    }
    var handlerName = goog.html.sanitizer.HtmlSanitizer.attrIdentifier_(attr.tagName, attr.attributeName);
    this.attributeWhitelist_[handlerName] = attr.policy ? attr.policy : goog.html.sanitizer.HtmlSanitizer.cleanUpAttribute_;
    this.attributeOverrideList_[handlerName] = true;
  }, this);
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.onlyAllowTags = function(tagWhitelist) {
  this.tagWhitelist_ = {"SPAN":true};
  goog.array.forEach(tagWhitelist, function(tag) {
    tag = tag.toUpperCase();
    if (goog.html.sanitizer.TagWhitelist[tag]) {
      this.tagWhitelist_[tag] = true;
    } else {
      throw new Error("Only whitelisted tags can be allowed. See " + "goog.html.sanitizer.TagWhitelist.");
    }
  }, this);
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.onlyAllowAttributes = function(attrWhitelist) {
  var oldWhitelist = this.attributeWhitelist_;
  this.attributeWhitelist_ = {};
  goog.array.forEach(attrWhitelist, function(attr) {
    if (goog.typeOf(attr) === "string") {
      attr = {tagName:"*", attributeName:attr.toUpperCase(), policy:null};
    }
    var handlerName = goog.html.sanitizer.HtmlSanitizer.attrIdentifier_(attr.tagName, attr.attributeName);
    if (!oldWhitelist[handlerName]) {
      throw new Error("Only whitelisted attributes can be allowed.");
    }
    this.attributeWhitelist_[handlerName] = attr.policy ? attr.policy : goog.html.sanitizer.HtmlSanitizer.cleanUpAttribute_;
  }, this);
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.addOriginalTagNames = function() {
  this.shouldAddOriginalTagNames_ = true;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.withCustomNetworkRequestUrlPolicy = function(customNetworkReqUrlPolicy) {
  this.networkRequestUrlPolicy_ = customNetworkReqUrlPolicy;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.withCustomUrlPolicy = function(customUrlPolicy) {
  this.urlPolicy_ = customUrlPolicy;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.withCustomNamePolicy = function(customNamePolicy) {
  this.namePolicy_ = customNamePolicy;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.withCustomTokenPolicy = function(customTokenPolicy) {
  this.tokenPolicy_ = customTokenPolicy;
  return this;
};
goog.html.sanitizer.HtmlSanitizer.wrapPolicy_ = function(customPolicy, defaultPolicy) {
  return function(value, hints, ctx, policy) {
    var result = customPolicy(value, hints, ctx, policy);
    return result == null ? null : defaultPolicy(result, hints, ctx, policy);
  };
};
goog.html.sanitizer.HtmlSanitizer.installDefaultPolicy_ = function(whitelist, overrideList, key, defaultPolicy) {
  if (whitelist[key] && !overrideList[key]) {
    whitelist[key] = goog.html.sanitizer.HtmlSanitizer.wrapPolicy_(whitelist[key], defaultPolicy);
  }
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.build = function() {
  return new goog.html.sanitizer.HtmlSanitizer(this);
};
goog.html.sanitizer.HtmlSanitizer.Builder.prototype.installPolicies_ = function() {
  if (this.policiesInstalled_) {
    throw new Error("HtmlSanitizer.Builder.build() can only be used once.");
  }
  var installPolicy = goog.html.sanitizer.HtmlSanitizer.installDefaultPolicy_;
  installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, "* USEMAP", goog.html.sanitizer.HtmlSanitizer.sanitizeUrlFragment_);
  var urlAttributes = ["* ACTION", "* CITE", "* HREF"];
  var urlPolicy = goog.html.sanitizer.HtmlSanitizer.wrapUrlPolicy_(this.urlPolicy_);
  goog.array.forEach(urlAttributes, function(attribute) {
    installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, attribute, urlPolicy);
  }, this);
  var networkUrlAttributes = ["* LONGDESC", "* SRC", "LINK HREF"];
  var networkRequestUrlPolicy = goog.html.sanitizer.HtmlSanitizer.wrapUrlPolicy_(this.networkRequestUrlPolicy_);
  goog.array.forEach(networkUrlAttributes, function(attribute) {
    installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, attribute, networkRequestUrlPolicy);
  }, this);
  var nameAttributes = ["* FOR", "* HEADERS", "* NAME"];
  goog.array.forEach(nameAttributes, function(attribute) {
    installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, attribute, goog.partial(goog.html.sanitizer.HtmlSanitizer.sanitizeName_, this.namePolicy_));
  }, this);
  installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, "A TARGET", goog.partial(goog.html.sanitizer.HtmlSanitizer.allowedAttributeValues_, ["_blank", "_self"]));
  installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, "* CLASS", goog.partial(goog.html.sanitizer.HtmlSanitizer.sanitizeClasses_, this.tokenPolicy_));
  installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, "* ID", goog.partial(goog.html.sanitizer.HtmlSanitizer.sanitizeId_, this.tokenPolicy_));
  installPolicy(this.attributeWhitelist_, this.attributeOverrideList_, "* STYLE", goog.partial(this.sanitizeInlineCssPolicy_, networkRequestUrlPolicy));
  this.policiesInstalled_ = true;
};
goog.html.sanitizer.HtmlSanitizer.defaultUrlPolicy_ = goog.html.SafeUrl.sanitize;
goog.html.sanitizer.HtmlSanitizer.defaultNetworkRequestUrlPolicy_ = goog.functions.NULL;
goog.html.sanitizer.HtmlSanitizer.defaultNamePolicy_ = goog.functions.NULL;
goog.html.sanitizer.HtmlSanitizer.defaultTokenPolicy_ = goog.functions.NULL;
goog.html.sanitizer.HtmlSanitizer.attrIdentifier_ = function(nodeName, attributeName) {
  if (!nodeName) {
    nodeName = "*";
  }
  return (nodeName + " " + attributeName).toUpperCase();
};
goog.html.sanitizer.HtmlSanitizer.sanitizeCssDeclarationList_ = function(policySanitizeUrl, attrValue, policyHints, policyContext) {
  if (!policyContext.cssStyle) {
    return null;
  }
  var naiveUriRewriter = function(uri, prop) {
    policyHints.cssProperty = prop;
    var sanitizedUrl = policySanitizeUrl(uri, policyHints);
    if (sanitizedUrl == null) {
      return null;
    }
    return goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("HtmlSanitizerPolicy created with networkRequestUrlPolicy_ " + "when installing '* STYLE' handler."), sanitizedUrl);
  };
  var sanitizedStyle = goog.html.SafeStyle.unwrap(goog.html.sanitizer.CssSanitizer.sanitizeInlineStyle(policyContext.cssStyle, naiveUriRewriter));
  return sanitizedStyle == "" ? null : sanitizedStyle;
};
goog.html.sanitizer.HtmlSanitizer.cleanUpAttribute_ = function(attrValue) {
  return goog.string.trim(attrValue);
};
goog.html.sanitizer.HtmlSanitizer.allowedAttributeValues_ = function(allowedValues, attrValue, policyHints) {
  var trimmed = goog.string.trim(attrValue);
  return goog.array.contains(allowedValues, trimmed.toLowerCase()) ? trimmed : null;
};
goog.html.sanitizer.HtmlSanitizer.sanitizeUrlFragment_ = function(urlFragment, policyHints) {
  var trimmed = goog.string.trim(urlFragment);
  if (trimmed && trimmed.charAt(0) == "#") {
    return trimmed;
  }
  return null;
};
goog.html.sanitizer.HtmlSanitizer.sanitizeName_ = function(namePolicy, attrName, policyHints) {
  var trimmed = goog.string.trim(attrName);
  return namePolicy(trimmed, policyHints);
};
goog.html.sanitizer.HtmlSanitizer.sanitizeClasses_ = function(tokenPolicy, attrValue, policyHints) {
  var classes = attrValue.split(/(?:\s+)/);
  var sanitizedClasses = [];
  for (var i = 0; i < classes.length; i++) {
    var sanitizedClass = tokenPolicy(classes[i], policyHints);
    if (sanitizedClass) {
      sanitizedClasses.push(sanitizedClass);
    }
  }
  return sanitizedClasses.length == 0 ? null : sanitizedClasses.join(" ");
};
goog.html.sanitizer.HtmlSanitizer.sanitizeId_ = function(tokenPolicy, attrValue, policyHints) {
  var trimmed = goog.string.trim(attrValue);
  return tokenPolicy(trimmed, policyHints);
};
goog.html.sanitizer.HtmlSanitizer.getContext_ = function(attributeName, dirtyElement) {
  var policyContext = {cssStyle:undefined};
  if (attributeName == "style") {
    policyContext.cssStyle = goog.html.sanitizer.noclobber.getElementStyle(dirtyElement);
  }
  return policyContext;
};
goog.html.sanitizer.HtmlSanitizer.prototype.sanitize = function(unsanitizedHtml) {
  this.currentStyleContainerId_ = this.getStyleContainerId_();
  var sanitizedString = this.processToString(unsanitizedHtml);
  return goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Output of HTML sanitizer"), sanitizedString);
};
goog.html.sanitizer.HtmlSanitizer.prototype.sanitizeToDomNode = function(unsanitizedHtml) {
  this.currentStyleContainerId_ = this.getStyleContainerId_();
  return goog.html.sanitizer.SafeDomTreeProcessor.prototype.processToTree.call(this, unsanitizedHtml);
};
goog.html.sanitizer.HtmlSanitizer.prototype.processRoot = function(newRoot) {
  if (this.currentStyleContainerId_ && this.styleContainerId_ == goog.html.sanitizer.RANDOM_CONTAINER_) {
    newRoot.id = this.currentStyleContainerId_;
  }
};
goog.html.sanitizer.HtmlSanitizer.prototype.preProcessHtml = function(unsanitizedHtml) {
  if (!this.inlineStyleRules_) {
    return unsanitizedHtml;
  }
  var inertUnsanitizedDom = goog.html.sanitizer.CssSanitizer.safeParseHtmlAndGetInertElement("\x3cdiv\x3e" + unsanitizedHtml + "\x3c/div\x3e");
  goog.asserts.assert(inertUnsanitizedDom, "Older browsers that don't support inert " + "parsing should not get to this branch");
  goog.html.sanitizer.CssSanitizer.inlineStyleRules(inertUnsanitizedDom);
  return inertUnsanitizedDom.innerHTML;
};
goog.html.sanitizer.HtmlSanitizer.prototype.getStyleContainerId_ = function() {
  var randomStyleContainmentEnabled = this.styleContainerId_ == goog.html.sanitizer.RANDOM_CONTAINER_;
  var randomStyleContainmentNecessary = !("STYLE" in this.tagBlacklist_) && "STYLE" in this.tagWhitelist_;
  return randomStyleContainmentEnabled && randomStyleContainmentNecessary ? "sanitizer-" + goog.string.getRandomString() : this.styleContainerId_;
};
goog.html.sanitizer.HtmlSanitizer.prototype.createTextNode = function(dirtyNode) {
  var textContent = dirtyNode.data;
  var dirtyParent = goog.html.sanitizer.noclobber.getParentNode(dirtyNode);
  if (dirtyParent && goog.html.sanitizer.noclobber.getNodeName(dirtyParent).toLowerCase() == "style" && !("STYLE" in this.tagBlacklist_) && "STYLE" in this.tagWhitelist_) {
    textContent = goog.html.SafeStyleSheet.unwrap(goog.html.sanitizer.CssSanitizer.sanitizeStyleSheetString(textContent, this.currentStyleContainerId_, goog.bind(function(uri, propName) {
      return this.networkRequestUrlPolicy_(uri, {cssProperty:propName});
    }, this)));
  }
  return document.createTextNode(textContent);
};
goog.html.sanitizer.HtmlSanitizer.prototype.createElementWithoutAttributes = function(dirtyElement) {
  var dirtyName = goog.html.sanitizer.noclobber.getNodeName(dirtyElement).toUpperCase();
  if (dirtyName in this.tagBlacklist_) {
    return null;
  }
  if (this.tagWhitelist_[dirtyName]) {
    return document.createElement(dirtyName);
  }
  var spanElement = goog.dom.createElement(goog.dom.TagName.SPAN);
  if (this.shouldAddOriginalTagNames_) {
    goog.html.sanitizer.noclobber.setElementAttribute(spanElement, goog.html.sanitizer.HTML_SANITIZER_SANITIZED_ATTR_NAME_, dirtyName.toLowerCase());
  }
  return spanElement;
};
goog.html.sanitizer.HtmlSanitizer.prototype.processElementAttribute = function(dirtyElement, attribute) {
  var attributeName = attribute.name;
  if (goog.string.startsWith(attributeName, goog.html.sanitizer.HTML_SANITIZER_BOOKKEEPING_PREFIX_)) {
    return null;
  }
  var elementName = goog.html.sanitizer.noclobber.getNodeName(dirtyElement);
  var unsanitizedAttrValue = attribute.value;
  var policyHints = {tagName:goog.string.trim(elementName).toLowerCase(), attributeName:goog.string.trim(attributeName).toLowerCase()};
  var policyContext = goog.html.sanitizer.HtmlSanitizer.getContext_(policyHints.attributeName, dirtyElement);
  var tagHandlerIndex = goog.html.sanitizer.HtmlSanitizer.attrIdentifier_(elementName, attributeName);
  if (tagHandlerIndex in this.attributeHandlers_) {
    var handler = this.attributeHandlers_[tagHandlerIndex];
    return handler(unsanitizedAttrValue, policyHints, policyContext);
  }
  var genericHandlerIndex = goog.html.sanitizer.HtmlSanitizer.attrIdentifier_(null, attributeName);
  if (genericHandlerIndex in this.attributeHandlers_) {
    var handler = this.attributeHandlers_[genericHandlerIndex];
    return handler(unsanitizedAttrValue, policyHints, policyContext);
  }
  return null;
};
goog.html.sanitizer.HtmlSanitizer.sanitize = function(unsanitizedHtml) {
  var sanitizer = (new goog.html.sanitizer.HtmlSanitizer.Builder).build();
  return sanitizer.sanitize(unsanitizedHtml);
};
