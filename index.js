(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.RovingIndex = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RovingIndex = function () {
  function RovingIndex() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cyclic: true,
      index: -1,
      pausable: false,
      total: 0
    };

    _classCallCheck(this, RovingIndex);

    this.cyclic = options.cyclic;
    this.index = options.index;
    this.pausable = options.pausable;
    this.total = options.total;
  }

  _createClass(RovingIndex, [{
    key: "resetIndex",
    value: function resetIndex() {
      this.index = -1;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: "prev",
    value: function prev() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var oldIndex = this.index;
      this.setIndex(this.index - 1);
      callback(oldIndex, this.index);
    }
  }, {
    key: "next",
    value: function next() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var oldIndex = this.index;
      this.setIndex(this.index + 1);
      callback(oldIndex, this.index);
    }
  }, {
    key: "setIndex",
    value: function setIndex() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.total;

      this.index = RovingIndex.validateIndex(index, total, {
        cyclic: this.cyclic,
        pausable: this.pausable
      });
    }
  }, {
    key: "setTotal",
    value: function setTotal() {
      var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.total = total;
    }
  }], [{
    key: "validateIndex",
    value: function validateIndex() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (options.pausable) {
        return RovingIndex.validatePausableIndex(index, total);
      }

      if (options.cyclic) {
        return RovingIndex.validateCyclicIndex(index, total);
      }

      return RovingIndex.validateFiniteIndex(index, total);
    }
  }, {
    key: "validateFiniteIndex",
    value: function validateFiniteIndex(index, total) {
      if (index < 0) {
        return 0;
      } else if (index >= total) {
        return total - 1;
      }

      return index;
    }
  }, {
    key: "validateCyclicIndex",
    value: function validateCyclicIndex(index, total) {
      if (index < 0) {
        return total - 1;
      } else if (index >= total) {
        return 0;
      }

      return index;
    }
  }, {
    key: "validatePausableIndex",
    value: function validatePausableIndex(index, total) {
      if (index === -1 || index >= total) {
        return -1;
      } else if (index < -1) {
        return total - 1;
      }

      return index;
    }
  }]);

  return RovingIndex;
}();

exports.default = RovingIndex;

},{}]},{},[1])(1)
});