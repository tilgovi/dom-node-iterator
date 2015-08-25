(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.nodeIteratorShim = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = createNodeIterator;

  function createNodeIterator(root, whatToShow) {
    var filter = arguments[2] === undefined ? null : arguments[2];

    var document = root.ownerDocument;
    var iter = document.createNodeIterator(root, whatToShow, filter, false);
    return typeof iter.referenceNode === 'undefined' ? shim(iter, root) : iter;
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

      detach: {
        get: function get() {
          return iter.detach;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUtaXRlcmF0b3Itc2hpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7bUJBQXdCLGtCQUFrQjs7QUFBM0IsV0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFpQjtRQUFmLE1BQU0sZ0NBQUcsSUFBSTs7QUFDeEUsUUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUNsQyxRQUFJLElBQUksR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEUsV0FBTyxPQUFPLElBQUksQ0FBQyxhQUFhLEFBQUMsS0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7R0FDN0U7O0FBR0QsV0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN4QixRQUFJLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDMUIsUUFBSSwyQkFBMkIsR0FBRyxJQUFJLENBQUM7O0FBRXZDLFdBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO0FBQzNDLFVBQUksRUFBRTtBQUNKLFdBQUcsRUFBRTtpQkFBTSxJQUFJLENBQUMsSUFBSTtTQUFBO09BQ3JCOztBQUVELGdCQUFVLEVBQUU7QUFDVixXQUFHLEVBQUU7aUJBQU0sSUFBSSxDQUFDLFVBQVU7U0FBQTtPQUMzQjs7QUFFRCxZQUFNLEVBQUU7QUFDTixXQUFHLEVBQUU7aUJBQU0sSUFBSSxDQUFDLE1BQU07U0FBQTtPQUN2Qjs7QUFFRCxtQkFBYSxFQUFFO0FBQ2IsV0FBRyxFQUFFO2lCQUFNLGNBQWM7U0FBQTtPQUMxQjs7QUFFRCxnQ0FBMEIsRUFBRTtBQUMxQixXQUFHLEVBQUU7aUJBQU0sMkJBQTJCO1NBQUE7T0FDdkM7O0FBRUQsWUFBTSxFQUFFO0FBQ04sV0FBRyxFQUFFO2lCQUFNLElBQUksQ0FBQyxNQUFNO1NBQUE7T0FDdkI7O0FBRUQsY0FBUSxFQUFFO0FBQ1IsYUFBSyxFQUFFLGlCQUFNO0FBQ1gsY0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLHFDQUEyQixHQUFHLEtBQUssQ0FBQztBQUNwQyxjQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDbkIsbUJBQU8sSUFBSSxDQUFDO1dBQ2IsTUFBTTtBQUNMLDBCQUFjLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLG1CQUFPLGNBQWMsQ0FBQztXQUN4QjtTQUNGO09BQ0Y7O0FBRUQsa0JBQVksRUFBRTtBQUNaLGFBQUssRUFBRSxpQkFBTTtBQUNYLGNBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNqQyxxQ0FBMkIsR0FBRyxJQUFJLENBQUM7QUFDbkMsY0FBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ2xCLG1CQUFPLElBQUksQ0FBQztXQUNkLE1BQU07QUFDTCwwQkFBYyxHQUFHLE1BQU0sQ0FBQztBQUN2QixtQkFBTyxjQUFjLENBQUM7V0FDeEI7U0FDRjtPQUNGO0tBQ0YsQ0FBQyxDQUFDO0dBQ0oiLCJmaWxlIjoibm9kZS1pdGVyYXRvci1zaGltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlciA9IG51bGwpIHtcbiAgbGV0IGRvY3VtZW50ID0gcm9vdC5vd25lckRvY3VtZW50O1xuICB2YXIgaXRlciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCB3aGF0VG9TaG93LCBmaWx0ZXIsIGZhbHNlKTtcbiAgcmV0dXJuIHR5cGVvZihpdGVyLnJlZmVyZW5jZU5vZGUpID09PSAndW5kZWZpbmVkJyA/IHNoaW0oaXRlciwgcm9vdCkgOiBpdGVyO1xufVxuXG5cbmZ1bmN0aW9uIHNoaW0oaXRlciwgcm9vdCkge1xuICB2YXIgX3JlZmVyZW5jZU5vZGUgPSByb290O1xuICB2YXIgX3BvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gdHJ1ZTtcblxuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShOb2RlSXRlcmF0b3IucHJvdG90eXBlLCB7XG4gICAgcm9vdDoge1xuICAgICAgZ2V0OiAoKSA9PiBpdGVyLnJvb3RcbiAgICB9LFxuXG4gICAgd2hhdFRvU2hvdzoge1xuICAgICAgZ2V0OiAoKSA9PiBpdGVyLndoYXRUb1Nob3dcbiAgICB9LFxuXG4gICAgZmlsdGVyOiB7XG4gICAgICBnZXQ6ICgpID0+IGl0ZXIuZmlsdGVyXG4gICAgfSxcblxuICAgIHJlZmVyZW5jZU5vZGU6IHtcbiAgICAgIGdldDogKCkgPT4gX3JlZmVyZW5jZU5vZGVcbiAgICB9LFxuXG4gICAgcG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGU6IHtcbiAgICAgIGdldDogKCkgPT4gX3BvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlXG4gICAgfSxcblxuICAgIGRldGFjaDoge1xuICAgICAgZ2V0OiAoKSA9PiBpdGVyLmRldGFjaFxuICAgIH0sXG5cbiAgICBuZXh0Tm9kZToge1xuICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGl0ZXIubmV4dE5vZGUoKTtcbiAgICAgICAgX3BvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcmVmZXJlbmNlTm9kZSA9IHJlc3VsdDtcbiAgICAgICAgICAgcmV0dXJuIF9yZWZlcmVuY2VOb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByZXZpb3VzTm9kZToge1xuICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGl0ZXIucHJldmlvdXNOb2RlKCk7XG4gICAgICAgIF9wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWU7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3JlZmVyZW5jZU5vZGUgPSByZXN1bHQ7XG4gICAgICAgICAgIHJldHVybiBfcmVmZXJlbmNlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii4vIn0=