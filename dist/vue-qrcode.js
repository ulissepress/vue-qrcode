(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueQr"] = factory();
	else
		root["VueQr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Qrcode = __webpack_require__(1);
	
	var _Qrcode2 = _interopRequireDefault(_Qrcode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Qrcode2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/xiaokai/xeme/vuejs/vue-qrcode/src/Qrcode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-149ec87c&file=Qrcode.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Qrcode.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-149ec87c&file=Qrcode.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Qrcode.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n  \n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Qrcode.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _qr = __webpack_require__(7);
	
	var _qr2 = _interopRequireDefault(_qr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    val: String,
	    size: 10,
	    // 'L', 'M', 'Q', 'H'
	    level: String,
	    bgColor: String,
	    fgColor: String
	  },
	  ready: function ready() {
	    var size = this.size;
	    var bgColor = this.bgColor;
	    var fgColor = this.fgColor;
	    var $qr = this.$els.qr;
	
	    var qrcode = (0, _qr2.default)(this.val);
	
	    var ctx = $qr.getContext('2d');
	    var cells = qrcode.modules;
	    var tileW = size / cells.length;
	    var tileH = size / cells.length;
	    var scale = (window.devicePixelRatio || 1) / getBackingStorePixelRatio(ctx);
	
	    $qr.height = $qr.width = size * scale;
	    ctx.scale(scale, scale);
	
	    cells.forEach(function (row, rdx) {
	      row.forEach(function (cell, cdx) {
	        ctx.fillStyle = cell ? fgColor : bgColor;
	        var w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
	        var h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
	        ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h);
	      });
	    });
	  }
	}; // <template>
	//   <div>
	//     <canvas
	//       :style="{height: size + 'px', width: size + 'px'}"
	//       height={{size}}
	//       width={{size}}
	//       v-el:qr
	//     ></canvas>
	//   </div>
	// </template>
	//
	//
	// <script>
	
	function getBackingStorePixelRatio(ctx) {
	  return ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
	}

	// </script>
	//
	// <style>
	//
	//
	// </style>var vm = new Vue({
	//
	//   el: "#demo"
	//
	// })
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var QRCode = __webpack_require__(8);
	var ErrorCorrectLevel = __webpack_require__(12);
	
	var qrcode = function(data, opt) {
		opt = opt || {};
		var qr = new QRCode(opt.typeNumber || -1,
							opt.errorCorrectLevel || ErrorCorrectLevel.H);
		qr.addData(data);
		qr.make();
	
		return qr;
	};
	
	qrcode.ErrorCorrectLevel = ErrorCorrectLevel;
	
	module.exports = qrcode;
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var BitByte = __webpack_require__(9);
	var RSBlock = __webpack_require__(11);
	var BitBuffer = __webpack_require__(13);
	var util = __webpack_require__(14);
	var Polynomial = __webpack_require__(15);
	
	function QRCode(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}
	
	// for client side minification
	var proto = QRCode.prototype;
	
	proto.addData = function(data) {
		var newData = new BitByte(data);
		this.dataList.push(newData);
		this.dataCache = null;
	};
	
	proto.isDark = function(row, col) {
		if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
			throw new Error(row + "," + col);
		}
		return this.modules[row][col];
	};
	
	proto.getModuleCount = function() {
		return this.moduleCount;
	};
	
	proto.make = function() {
		// Calculate automatically typeNumber if provided is < 1
		if (this.typeNumber < 1 ){
			var typeNumber = 1;
			for (typeNumber = 1; typeNumber < 40; typeNumber++) {
				var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
	
				var buffer = new BitBuffer();
				var totalDataCount = 0;
				for (var i = 0; i < rsBlocks.length; i++) {
					totalDataCount += rsBlocks[i].dataCount;
				}
	
				for (var i = 0; i < this.dataList.length; i++) {
					var data = this.dataList[i];
					buffer.put(data.mode, 4);
					buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
					data.write(buffer);
				}
				if (buffer.getLengthInBits() <= totalDataCount * 8)
					break;
			}
			this.typeNumber = typeNumber;
		}
		this.makeImpl(false, this.getBestMaskPattern() );
	};
	
	proto.makeImpl = function(test, maskPattern) {
		
		this.moduleCount = this.typeNumber * 4 + 17;
		this.modules = new Array(this.moduleCount);
		
		for (var row = 0; row < this.moduleCount; row++) {
			
			this.modules[row] = new Array(this.moduleCount);
			
			for (var col = 0; col < this.moduleCount; col++) {
				this.modules[row][col] = null;//(col + row) % 3;
			}
		}
	
		this.setupPositionProbePattern(0, 0);
		this.setupPositionProbePattern(this.moduleCount - 7, 0);
		this.setupPositionProbePattern(0, this.moduleCount - 7);
		this.setupPositionAdjustPattern();
		this.setupTimingPattern();
		this.setupTypeInfo(test, maskPattern);
		
		if (this.typeNumber >= 7) {
			this.setupTypeNumber(test);
		}
	
		if (this.dataCache == null) {
			this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
		}
	
		this.mapData(this.dataCache, maskPattern);
	};
	
	proto.setupPositionProbePattern = function(row, col)  {
		
		for (var r = -1; r <= 7; r++) {
			
			if (row + r <= -1 || this.moduleCount <= row + r) continue;
			
			for (var c = -1; c <= 7; c++) {
				
				if (col + c <= -1 || this.moduleCount <= col + c) continue;
				
				if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
						|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
						|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
					this.modules[row + r][col + c] = true;
				} else {
					this.modules[row + r][col + c] = false;
				}
			}		
		}		
	};
	
	proto.getBestMaskPattern = function() {
	
		var minLostPoint = 0;
		var pattern = 0;
	
		for (var i = 0; i < 8; i++) {
			
			this.makeImpl(true, i);
	
			var lostPoint = util.getLostPoint(this);
	
			if (i == 0 || minLostPoint >  lostPoint) {
				minLostPoint = lostPoint;
				pattern = i;
			}
		}
	
		return pattern;
	};
	
	proto.createMovieClip = function(target_mc, instance_name, depth) {
	
		var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
		var cs = 1;
	
		this.make();
	
		for (var row = 0; row < this.modules.length; row++) {
			
			var y = row * cs;
			
			for (var col = 0; col < this.modules[row].length; col++) {
	
				var x = col * cs;
				var dark = this.modules[row][col];
			
				if (dark) {
					qr_mc.beginFill(0, 100);
					qr_mc.moveTo(x, y);
					qr_mc.lineTo(x + cs, y);
					qr_mc.lineTo(x + cs, y + cs);
					qr_mc.lineTo(x, y + cs);
					qr_mc.endFill();
				}
			}
		}
		
		return qr_mc;
	};
	
	proto.setupTimingPattern = function() {
		
		for (var r = 8; r < this.moduleCount - 8; r++) {
			if (this.modules[r][6] != null) {
				continue;
			}
			this.modules[r][6] = (r % 2 == 0);
		}
	
		for (var c = 8; c < this.moduleCount - 8; c++) {
			if (this.modules[6][c] != null) {
				continue;
			}
			this.modules[6][c] = (c % 2 == 0);
		}
	};
	
	proto.setupPositionAdjustPattern = function() {
	
		var pos = util.getPatternPosition(this.typeNumber);
		
		for (var i = 0; i < pos.length; i++) {
		
			for (var j = 0; j < pos.length; j++) {
			
				var row = pos[i];
				var col = pos[j];
				
				if (this.modules[row][col] != null) {
					continue;
				}
				
				for (var r = -2; r <= 2; r++) {
				
					for (var c = -2; c <= 2; c++) {
					
						if (r == -2 || r == 2 || c == -2 || c == 2
								|| (r == 0 && c == 0) ) {
							this.modules[row + r][col + c] = true;
						} else {
							this.modules[row + r][col + c] = false;
						}
					}
				}
			}
		}
	};
	
	proto.setupTypeNumber = function(test) {
	
		var bits = util.getBCHTypeNumber(this.typeNumber);
	
		for (var i = 0; i < 18; i++) {
			var mod = (!test && ( (bits >> i) & 1) == 1);
			this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
		}
	
		for (var i = 0; i < 18; i++) {
			var mod = (!test && ( (bits >> i) & 1) == 1);
			this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
		}
	};
	
	proto.setupTypeInfo = function(test, maskPattern) {
	
		var data = (this.errorCorrectLevel << 3) | maskPattern;
		var bits = util.getBCHTypeInfo(data);
	
		// vertical		
		for (var i = 0; i < 15; i++) {
	
			var mod = (!test && ( (bits >> i) & 1) == 1);
	
			if (i < 6) {
				this.modules[i][8] = mod;
			} else if (i < 8) {
				this.modules[i + 1][8] = mod;
			} else {
				this.modules[this.moduleCount - 15 + i][8] = mod;
			}
		}
	
		// horizontal
		for (var i = 0; i < 15; i++) {
	
			var mod = (!test && ( (bits >> i) & 1) == 1);
			
			if (i < 8) {
				this.modules[8][this.moduleCount - i - 1] = mod;
			} else if (i < 9) {
				this.modules[8][15 - i - 1 + 1] = mod;
			} else {
				this.modules[8][15 - i - 1] = mod;
			}
		}
	
		// fixed module
		this.modules[this.moduleCount - 8][8] = (!test);
	};
	
	proto.mapData = function(data, maskPattern) {
		
		var inc = -1;
		var row = this.moduleCount - 1;
		var bitIndex = 7;
		var byteIndex = 0;
		
		for (var col = this.moduleCount - 1; col > 0; col -= 2) {
	
			if (col == 6) col--;
	
			while (true) {
	
				for (var c = 0; c < 2; c++) {
					
					if (this.modules[row][col - c] == null) {
						
						var dark = false;
	
						if (byteIndex < data.length) {
							dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
						}
	
						var mask = util.getMask(maskPattern, row, col - c);
	
						if (mask) {
							dark = !dark;
						}
						
						this.modules[row][col - c] = dark;
						bitIndex--;
	
						if (bitIndex == -1) {
							byteIndex++;
							bitIndex = 7;
						}
					}
				}
								
				row += inc;
	
				if (row < 0 || this.moduleCount <= row) {
					row -= inc;
					inc = -inc;
					break;
				}
			}
		}
	};
	
	QRCode.PAD0 = 0xEC;
	QRCode.PAD1 = 0x11;
	
	QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
		
		var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
		
		var buffer = new BitBuffer();
		
		for (var i = 0; i < dataList.length; i++) {
			var data = dataList[i];
			buffer.put(data.mode, 4);
			buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
			data.write(buffer);
		}
	
		// calc num max data.
		var totalDataCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalDataCount += rsBlocks[i].dataCount;
		}
	
		if (buffer.getLengthInBits() > totalDataCount * 8) {
			throw new Error("code length overflow. ("
				+ buffer.getLengthInBits()
				+ ">"
				+  totalDataCount * 8
				+ ")");
		}
	
		// end code
		if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
			buffer.put(0, 4);
		}
	
		// padding
		while (buffer.getLengthInBits() % 8 != 0) {
			buffer.putBit(false);
		}
	
		// padding
		while (true) {
			
			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCode.PAD0, 8);
			
			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCode.PAD1, 8);
		}
	
		return QRCode.createBytes(buffer, rsBlocks);
	};
	
	QRCode.createBytes = function(buffer, rsBlocks) {
	
		var offset = 0;
		
		var maxDcCount = 0;
		var maxEcCount = 0;
		
		var dcdata = new Array(rsBlocks.length);
		var ecdata = new Array(rsBlocks.length);
		
		for (var r = 0; r < rsBlocks.length; r++) {
	
			var dcCount = rsBlocks[r].dataCount;
			var ecCount = rsBlocks[r].totalCount - dcCount;
	
			maxDcCount = Math.max(maxDcCount, dcCount);
			maxEcCount = Math.max(maxEcCount, ecCount);
			
			dcdata[r] = new Array(dcCount);
			
			for (var i = 0; i < dcdata[r].length; i++) {
				dcdata[r][i] = 0xff & buffer.buffer[i + offset];
			}
			offset += dcCount;
			
			var rsPoly = util.getErrorCorrectPolynomial(ecCount);
			var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);
	
			var modPoly = rawPoly.mod(rsPoly);
			ecdata[r] = new Array(rsPoly.getLength() - 1);
			for (var i = 0; i < ecdata[r].length; i++) {
	            var modIndex = i + modPoly.getLength() - ecdata[r].length;
				ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
			}
	
		}
		
		var totalCodeCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalCodeCount += rsBlocks[i].totalCount;
		}
	
		var data = new Array(totalCodeCount);
		var index = 0;
	
		for (var i = 0; i < maxDcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < dcdata[r].length) {
					data[index++] = dcdata[r][i];
				}
			}
		}
	
		for (var i = 0; i < maxEcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < ecdata[r].length) {
					data[index++] = ecdata[r][i];
				}
			}
		}
	
		return data;
	};
	
	module.exports = QRCode;
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var mode = __webpack_require__(10);
	
	function QR8bitByte(data) {
		this.mode = mode.MODE_8BIT_BYTE;
		this.data = data;
	}
	
	QR8bitByte.prototype = {
	
		getLength : function(buffer) {
			return this.data.length;
		},
		
		write : function(buffer) {
			for (var i = 0; i < this.data.length; i++) {
				// not JIS ...
				buffer.put(this.data.charCodeAt(i), 8);
			}
		}
	};
	
	module.exports = QR8bitByte;
	


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
		MODE_NUMBER :		1 << 0,
		MODE_ALPHA_NUM : 	1 << 1,
		MODE_8BIT_BYTE : 	1 << 2,
		MODE_KANJI :		1 << 3
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// ErrorCorrectLevel
	var ECL = __webpack_require__(12);
	
	function QRRSBlock(totalCount, dataCount) {
		this.totalCount = totalCount;
		this.dataCount  = dataCount;
	}
	
	QRRSBlock.RS_BLOCK_TABLE = [
	
		// L
		// M
		// Q
		// H
	
		// 1
		[1, 26, 19],
		[1, 26, 16],
		[1, 26, 13],
		[1, 26, 9],
		
		// 2
		[1, 44, 34],
		[1, 44, 28],
		[1, 44, 22],
		[1, 44, 16],
	
		// 3
		[1, 70, 55],
		[1, 70, 44],
		[2, 35, 17],
		[2, 35, 13],
	
		// 4		
		[1, 100, 80],
		[2, 50, 32],
		[2, 50, 24],
		[4, 25, 9],
		
		// 5
		[1, 134, 108],
		[2, 67, 43],
		[2, 33, 15, 2, 34, 16],
		[2, 33, 11, 2, 34, 12],
		
		// 6
		[2, 86, 68],
		[4, 43, 27],
		[4, 43, 19],
		[4, 43, 15],
		
		// 7		
		[2, 98, 78],
		[4, 49, 31],
		[2, 32, 14, 4, 33, 15],
		[4, 39, 13, 1, 40, 14],
		
		// 8
		[2, 121, 97],
		[2, 60, 38, 2, 61, 39],
		[4, 40, 18, 2, 41, 19],
		[4, 40, 14, 2, 41, 15],
		
		// 9
		[2, 146, 116],
		[3, 58, 36, 2, 59, 37],
		[4, 36, 16, 4, 37, 17],
		[4, 36, 12, 4, 37, 13],
		
		// 10		
		[2, 86, 68, 2, 87, 69],
		[4, 69, 43, 1, 70, 44],
		[6, 43, 19, 2, 44, 20],
		[6, 43, 15, 2, 44, 16],
	
		// 11
		[4, 101, 81],
		[1, 80, 50, 4, 81, 51],
		[4, 50, 22, 4, 51, 23],
		[3, 36, 12, 8, 37, 13],
	
		// 12
		[2, 116, 92, 2, 117, 93],
		[6, 58, 36, 2, 59, 37],
		[4, 46, 20, 6, 47, 21],
		[7, 42, 14, 4, 43, 15],
	
		// 13
		[4, 133, 107],
		[8, 59, 37, 1, 60, 38],
		[8, 44, 20, 4, 45, 21],
		[12, 33, 11, 4, 34, 12],
	
		// 14
		[3, 145, 115, 1, 146, 116],
		[4, 64, 40, 5, 65, 41],
		[11, 36, 16, 5, 37, 17],
		[11, 36, 12, 5, 37, 13],
	
		// 15
		[5, 109, 87, 1, 110, 88],
		[5, 65, 41, 5, 66, 42],
		[5, 54, 24, 7, 55, 25],
		[11, 36, 12],
	
		// 16
		[5, 122, 98, 1, 123, 99],
		[7, 73, 45, 3, 74, 46],
		[15, 43, 19, 2, 44, 20],
		[3, 45, 15, 13, 46, 16],
	
		// 17
		[1, 135, 107, 5, 136, 108],
		[10, 74, 46, 1, 75, 47],
		[1, 50, 22, 15, 51, 23],
		[2, 42, 14, 17, 43, 15],
	
		// 18
		[5, 150, 120, 1, 151, 121],
		[9, 69, 43, 4, 70, 44],
		[17, 50, 22, 1, 51, 23],
		[2, 42, 14, 19, 43, 15],
	
		// 19
		[3, 141, 113, 4, 142, 114],
		[3, 70, 44, 11, 71, 45],
		[17, 47, 21, 4, 48, 22],
		[9, 39, 13, 16, 40, 14],
	
		// 20
		[3, 135, 107, 5, 136, 108],
		[3, 67, 41, 13, 68, 42],
		[15, 54, 24, 5, 55, 25],
		[15, 43, 15, 10, 44, 16],
	
		// 21
		[4, 144, 116, 4, 145, 117],
		[17, 68, 42],
		[17, 50, 22, 6, 51, 23],
		[19, 46, 16, 6, 47, 17],
	
		// 22
		[2, 139, 111, 7, 140, 112],
		[17, 74, 46],
		[7, 54, 24, 16, 55, 25],
		[34, 37, 13],
	
		// 23
		[4, 151, 121, 5, 152, 122],
		[4, 75, 47, 14, 76, 48],
		[11, 54, 24, 14, 55, 25],
		[16, 45, 15, 14, 46, 16],
	
		// 24
		[6, 147, 117, 4, 148, 118],
		[6, 73, 45, 14, 74, 46],
		[11, 54, 24, 16, 55, 25],
		[30, 46, 16, 2, 47, 17],
	
		// 25
		[8, 132, 106, 4, 133, 107],
		[8, 75, 47, 13, 76, 48],
		[7, 54, 24, 22, 55, 25],
		[22, 45, 15, 13, 46, 16],
	
		// 26
		[10, 142, 114, 2, 143, 115],
		[19, 74, 46, 4, 75, 47],
		[28, 50, 22, 6, 51, 23],
		[33, 46, 16, 4, 47, 17],
	
		// 27
		[8, 152, 122, 4, 153, 123],
		[22, 73, 45, 3, 74, 46],
		[8, 53, 23, 26, 54, 24],
		[12, 45, 15, 28, 46, 16],
	
		// 28
		[3, 147, 117, 10, 148, 118],
		[3, 73, 45, 23, 74, 46],
		[4, 54, 24, 31, 55, 25],
		[11, 45, 15, 31, 46, 16],
	
		// 29
		[7, 146, 116, 7, 147, 117],
		[21, 73, 45, 7, 74, 46],
		[1, 53, 23, 37, 54, 24],
		[19, 45, 15, 26, 46, 16],
	
		// 30
		[5, 145, 115, 10, 146, 116],
		[19, 75, 47, 10, 76, 48],
		[15, 54, 24, 25, 55, 25],
		[23, 45, 15, 25, 46, 16],
	
		// 31
		[13, 145, 115, 3, 146, 116],
		[2, 74, 46, 29, 75, 47],
		[42, 54, 24, 1, 55, 25],
		[23, 45, 15, 28, 46, 16],
	
		// 32
		[17, 145, 115],
		[10, 74, 46, 23, 75, 47],
		[10, 54, 24, 35, 55, 25],
		[19, 45, 15, 35, 46, 16],
	
		// 33
		[17, 145, 115, 1, 146, 116],
		[14, 74, 46, 21, 75, 47],
		[29, 54, 24, 19, 55, 25],
		[11, 45, 15, 46, 46, 16],
	
		// 34
		[13, 145, 115, 6, 146, 116],
		[14, 74, 46, 23, 75, 47],
		[44, 54, 24, 7, 55, 25],
		[59, 46, 16, 1, 47, 17],
	
		// 35
		[12, 151, 121, 7, 152, 122],
		[12, 75, 47, 26, 76, 48],
		[39, 54, 24, 14, 55, 25],
		[22, 45, 15, 41, 46, 16],
	
		// 36
		[6, 151, 121, 14, 152, 122],
		[6, 75, 47, 34, 76, 48],
		[46, 54, 24, 10, 55, 25],
		[2, 45, 15, 64, 46, 16],
	
		// 37
		[17, 152, 122, 4, 153, 123],
		[29, 74, 46, 14, 75, 47],
		[49, 54, 24, 10, 55, 25],
		[24, 45, 15, 46, 46, 16],
	
		// 38
		[4, 152, 122, 18, 153, 123],
		[13, 74, 46, 32, 75, 47],
		[48, 54, 24, 14, 55, 25],
		[42, 45, 15, 32, 46, 16],
	
		// 39
		[20, 147, 117, 4, 148, 118],
		[40, 75, 47, 7, 76, 48],
		[43, 54, 24, 22, 55, 25],
		[10, 45, 15, 67, 46, 16],
	
		// 40
		[19, 148, 118, 6, 149, 119],
		[18, 75, 47, 31, 76, 48],
		[34, 54, 24, 34, 55, 25],
		[20, 45, 15, 61, 46, 16]
	];
	
	QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
		
		var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
		
		if (rsBlock == undefined) {
			throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
		}
	
		var length = rsBlock.length / 3;
		
		var list = new Array();
		
		for (var i = 0; i < length; i++) {
	
			var count = rsBlock[i * 3 + 0];
			var totalCount = rsBlock[i * 3 + 1];
			var dataCount  = rsBlock[i * 3 + 2];
	
			for (var j = 0; j < count; j++) {
				list.push(new QRRSBlock(totalCount, dataCount) );	
			}
		}
		
		return list;
	}
	
	QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
	
		switch(errorCorrectLevel) {
		case ECL.L :
			return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
		case ECL.M :
			return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
		case ECL.Q :
			return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
		case ECL.H :
			return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
		default :
			return undefined;
		}
	}
	
	module.exports = QRRSBlock;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		L : 1,
		M : 0,
		Q : 3,
		H : 2
	};
	


/***/ },
/* 13 */
/***/ function(module, exports) {

	function QRBitBuffer() {
		this.buffer = new Array();
		this.length = 0;
	}
	
	QRBitBuffer.prototype = {
	
		get : function(index) {
			var bufIndex = Math.floor(index / 8);
			return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
		},
		
		put : function(num, length) {
			for (var i = 0; i < length; i++) {
				this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
			}
		},
		
		getLengthInBits : function() {
			return this.length;
		},
		
		putBit : function(bit) {
		
			var bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) {
				this.buffer.push(0);
			}
		
			if (bit) {
				this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
			}
		
			this.length++;
		}
	};
	
	module.exports = QRBitBuffer;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Mode = __webpack_require__(10);
	var Polynomial = __webpack_require__(15);
	var math = __webpack_require__(16);
	
	var QRMaskPattern = {
		PATTERN000 : 0,
		PATTERN001 : 1,
		PATTERN010 : 2,
		PATTERN011 : 3,
		PATTERN100 : 4,
		PATTERN101 : 5,
		PATTERN110 : 6,
		PATTERN111 : 7
	};
	
	var QRUtil = {
	
	    PATTERN_POSITION_TABLE : [
		    [],
		    [6, 18],
		    [6, 22],
		    [6, 26],
		    [6, 30],
		    [6, 34],
		    [6, 22, 38],
		    [6, 24, 42],
		    [6, 26, 46],
		    [6, 28, 50],
		    [6, 30, 54],		
		    [6, 32, 58],
		    [6, 34, 62],
		    [6, 26, 46, 66],
		    [6, 26, 48, 70],
		    [6, 26, 50, 74],
		    [6, 30, 54, 78],
		    [6, 30, 56, 82],
		    [6, 30, 58, 86],
		    [6, 34, 62, 90],
		    [6, 28, 50, 72, 94],
		    [6, 26, 50, 74, 98],
		    [6, 30, 54, 78, 102],
		    [6, 28, 54, 80, 106],
		    [6, 32, 58, 84, 110],
		    [6, 30, 58, 86, 114],
		    [6, 34, 62, 90, 118],
		    [6, 26, 50, 74, 98, 122],
		    [6, 30, 54, 78, 102, 126],
		    [6, 26, 52, 78, 104, 130],
		    [6, 30, 56, 82, 108, 134],
		    [6, 34, 60, 86, 112, 138],
		    [6, 30, 58, 86, 114, 142],
		    [6, 34, 62, 90, 118, 146],
		    [6, 30, 54, 78, 102, 126, 150],
		    [6, 24, 50, 76, 102, 128, 154],
		    [6, 28, 54, 80, 106, 132, 158],
		    [6, 32, 58, 84, 110, 136, 162],
		    [6, 26, 54, 82, 110, 138, 166],
		    [6, 30, 58, 86, 114, 142, 170]
	    ],
	
	    G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
	    G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
	    G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),
	
	    getBCHTypeInfo : function(data) {
		    var d = data << 10;
		    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
			    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
		    }
		    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
	    },
	
	    getBCHTypeNumber : function(data) {
		    var d = data << 12;
		    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
			    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
		    }
		    return (data << 12) | d;
	    },
	
	    getBCHDigit : function(data) {
	
		    var digit = 0;
	
		    while (data != 0) {
			    digit++;
			    data >>>= 1;
		    }
	
		    return digit;
	    },
	
	    getPatternPosition : function(typeNumber) {
		    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
	    },
	
	    getMask : function(maskPattern, i, j) {
		    
		    switch (maskPattern) {
			    
		    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
		    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
		    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
		    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
		    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
		    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
		    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
		    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;
	
		    default :
			    throw new Error("bad maskPattern:" + maskPattern);
		    }
	    },
	
	    getErrorCorrectPolynomial : function(errorCorrectLength) {
	
		    var a = new Polynomial([1], 0);
	
		    for (var i = 0; i < errorCorrectLength; i++) {
			    a = a.multiply(new Polynomial([1, math.gexp(i)], 0) );
		    }
	
		    return a;
	    },
	
	    getLengthInBits : function(mode, type) {
	
		    if (1 <= type && type < 10) {
	
			    // 1 - 9
	
			    switch(mode) {
			    case Mode.MODE_NUMBER 	: return 10;
			    case Mode.MODE_ALPHA_NUM 	: return 9;
			    case Mode.MODE_8BIT_BYTE	: return 8;
			    case Mode.MODE_KANJI  	: return 8;
			    default :
				    throw new Error("mode:" + mode);
			    }
	
		    } else if (type < 27) {
	
			    // 10 - 26
	
			    switch(mode) {
			    case Mode.MODE_NUMBER 	: return 12;
			    case Mode.MODE_ALPHA_NUM 	: return 11;
			    case Mode.MODE_8BIT_BYTE	: return 16;
			    case Mode.MODE_KANJI  	: return 10;
			    default :
				    throw new Error("mode:" + mode);
			    }
	
		    } else if (type < 41) {
	
			    // 27 - 40
	
			    switch(mode) {
			    case Mode.MODE_NUMBER 	: return 14;
			    case Mode.MODE_ALPHA_NUM	: return 13;
			    case Mode.MODE_8BIT_BYTE	: return 16;
			    case Mode.MODE_KANJI  	: return 12;
			    default :
				    throw new Error("mode:" + mode);
			    }
	
		    } else {
			    throw new Error("type:" + type);
		    }
	    },
	
	    getLostPoint : function(qrCode) {
		    
		    var moduleCount = qrCode.getModuleCount();
		    
		    var lostPoint = 0;
		    
		    // LEVEL1
		    
		    for (var row = 0; row < moduleCount; row++) {
	
			    for (var col = 0; col < moduleCount; col++) {
	
				    var sameCount = 0;
				    var dark = qrCode.isDark(row, col);
	
					for (var r = -1; r <= 1; r++) {
	
					    if (row + r < 0 || moduleCount <= row + r) {
						    continue;
					    }
	
					    for (var c = -1; c <= 1; c++) {
	
						    if (col + c < 0 || moduleCount <= col + c) {
							    continue;
						    }
	
						    if (r == 0 && c == 0) {
							    continue;
						    }
	
						    if (dark == qrCode.isDark(row + r, col + c) ) {
							    sameCount++;
						    }
					    }
				    }
	
				    if (sameCount > 5) {
					    lostPoint += (3 + sameCount - 5);
				    }
			    }
		    }
	
		    // LEVEL2
	
		    for (var row = 0; row < moduleCount - 1; row++) {
			    for (var col = 0; col < moduleCount - 1; col++) {
				    var count = 0;
				    if (qrCode.isDark(row,     col    ) ) count++;
				    if (qrCode.isDark(row + 1, col    ) ) count++;
				    if (qrCode.isDark(row,     col + 1) ) count++;
				    if (qrCode.isDark(row + 1, col + 1) ) count++;
				    if (count == 0 || count == 4) {
					    lostPoint += 3;
				    }
			    }
		    }
	
		    // LEVEL3
	
		    for (var row = 0; row < moduleCount; row++) {
			    for (var col = 0; col < moduleCount - 6; col++) {
				    if (qrCode.isDark(row, col)
						    && !qrCode.isDark(row, col + 1)
						    &&  qrCode.isDark(row, col + 2)
						    &&  qrCode.isDark(row, col + 3)
						    &&  qrCode.isDark(row, col + 4)
						    && !qrCode.isDark(row, col + 5)
						    &&  qrCode.isDark(row, col + 6) ) {
					    lostPoint += 40;
				    }
			    }
		    }
	
		    for (var col = 0; col < moduleCount; col++) {
			    for (var row = 0; row < moduleCount - 6; row++) {
				    if (qrCode.isDark(row, col)
						    && !qrCode.isDark(row + 1, col)
						    &&  qrCode.isDark(row + 2, col)
						    &&  qrCode.isDark(row + 3, col)
						    &&  qrCode.isDark(row + 4, col)
						    && !qrCode.isDark(row + 5, col)
						    &&  qrCode.isDark(row + 6, col) ) {
					    lostPoint += 40;
				    }
			    }
		    }
	
		    // LEVEL4
		    
		    var darkCount = 0;
	
		    for (var col = 0; col < moduleCount; col++) {
			    for (var row = 0; row < moduleCount; row++) {
				    if (qrCode.isDark(row, col) ) {
					    darkCount++;
				    }
			    }
		    }
		    
		    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
		    lostPoint += ratio * 10;
	
		    return lostPoint;		
	    }
	};
	
	module.exports = QRUtil;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var math = __webpack_require__(16);
	
	function QRPolynomial(num, shift) {
	
		if (num.length == undefined) {
			throw new Error(num.length + "/" + shift);
		}
	
		var offset = 0;
	
		while (offset < num.length && num[offset] == 0) {
			offset++;
		}
	
		this.num = new Array(num.length - offset + shift);
		for (var i = 0; i < num.length - offset; i++) {
			this.num[i] = num[i + offset];
		}
	}
	
	QRPolynomial.prototype = {
	
		get : function(index) {
			return this.num[index];
		},
		
		getLength : function() {
			return this.num.length;
		},
		
		multiply : function(e) {
		
			var num = new Array(this.getLength() + e.getLength() - 1);
		
			for (var i = 0; i < this.getLength(); i++) {
				for (var j = 0; j < e.getLength(); j++) {
					num[i + j] ^= math.gexp(math.glog(this.get(i) ) + math.glog(e.get(j) ) );
				}
			}
		
			return new QRPolynomial(num, 0);
		},
		
		mod : function(e) {
		
			if (this.getLength() - e.getLength() < 0) {
				return this;
			}
		
			var ratio = math.glog(this.get(0) ) - math.glog(e.get(0) );
		
			var num = new Array(this.getLength() );
			
			for (var i = 0; i < this.getLength(); i++) {
				num[i] = this.get(i);
			}
			
			for (var i = 0; i < e.getLength(); i++) {
				num[i] ^= math.gexp(math.glog(e.get(i) ) + ratio);
			}
		
			// recursive call
			return new QRPolynomial(num, 0).mod(e);
		}
	};
	
	module.exports = QRPolynomial;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var QRMath = {
	
		glog : function(n) {
		
			if (n < 1) {
				throw new Error("glog(" + n + ")");
			}
			
			return QRMath.LOG_TABLE[n];
		},
		
		gexp : function(n) {
		
			while (n < 0) {
				n += 255;
			}
		
			while (n >= 256) {
				n -= 255;
			}
		
			return QRMath.EXP_TABLE[n];
		},
		
		EXP_TABLE : new Array(256),
		
		LOG_TABLE : new Array(256)
	
	};
		
	for (var i = 0; i < 8; i++) {
		QRMath.EXP_TABLE[i] = 1 << i;
	}
	for (var i = 8; i < 256; i++) {
		QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
			^ QRMath.EXP_TABLE[i - 5]
			^ QRMath.EXP_TABLE[i - 6]
			^ QRMath.EXP_TABLE[i - 8];
	}
	for (var i = 0; i < 255; i++) {
		QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
	}
	
	module.exports = QRMath;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n  <div>\n    <canvas\n      :style=\"{height: size + 'px', width: size + 'px'}\"\n      height={{size}}\n      width={{size}}\n      v-el:qr\n    ></canvas>\n  </div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-qrcode.js.map