(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nodeIteratorShim = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createNodeIterator = createNodeIterator;
exports.install = install;
var _create = global.document.createNodeIterator;

function createNodeIterator(root, whatToShow) {
  var filter = arguments[2] === undefined ? null : arguments[2];

  var iter = _create.call(global.document, root, whatToShow, filter, false);
  return typeof iter.referenceNode === 'undefined' ? shim(iter, root) : iter;
}

function install() {
  global.document.createNodeIterator = createNodeIterator;
}

function shim(iter, root) {
  var _referenceNode = root;
  var _pointerBeforeReferenceNode = true;

  return Object.create(NodeIterator.prototype, {
    root: {
      get: function get() {
        return iter.root;
      }
    },

    whatToShow: {
      get: function get() {
        return iter.whatToShow;
      }
    },

    filter: {
      get: function get() {
        return iter.filter;
      }
    },

    referenceNode: {
      get: function get() {
        return _referenceNode;
      }
    },

    pointerBeforeReferenceNode: {
      get: function get() {
        return _pointerBeforeReferenceNode;
      }
    },

    nextNode: {
      value: function value() {
        var result = iter.nextNode();
        _pointerBeforeReferenceNode = false;
        if (result === null) {
          return null;
        } else {
          _referenceNode = result;
          return _referenceNode;
        }
      }
    },

    previousNode: {
      value: function value() {
        var result = iter.previousNode();
        _pointerBeforeReferenceNode = true;
        if (result === null) {
          return null;
        } else {
          _referenceNode = result;
          return _referenceNode;
        }
      }
    }
  });
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});