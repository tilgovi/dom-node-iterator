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

    var iter = _create.call(window.document, root, whatToShow, filter, false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUtaXRlcmF0b3Itc2hpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7bUJBQXdCLGtCQUFrQjs7QUFBM0IsV0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFpQjtRQUFmLE1BQU0sZ0NBQUcsSUFBSTs7QUFDeEUsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFFLFdBQU8sT0FBTyxJQUFJLENBQUMsYUFBYSxBQUFDLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQzdFOztBQUdELFdBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDeEIsUUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQUksMkJBQTJCLEdBQUcsSUFBSSxDQUFDOztBQUV2QyxXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtBQUMzQyxVQUFJLEVBQUU7QUFDSixXQUFHLEVBQUU7aUJBQU0sSUFBSSxDQUFDLElBQUk7U0FBQTtPQUNyQjs7QUFFRCxnQkFBVSxFQUFFO0FBQ1YsV0FBRyxFQUFFO2lCQUFNLElBQUksQ0FBQyxVQUFVO1NBQUE7T0FDM0I7O0FBRUQsWUFBTSxFQUFFO0FBQ04sV0FBRyxFQUFFO2lCQUFNLElBQUksQ0FBQyxNQUFNO1NBQUE7T0FDdkI7O0FBRUQsbUJBQWEsRUFBRTtBQUNiLFdBQUcsRUFBRTtpQkFBTSxjQUFjO1NBQUE7T0FDMUI7O0FBRUQsZ0NBQTBCLEVBQUU7QUFDMUIsV0FBRyxFQUFFO2lCQUFNLDJCQUEyQjtTQUFBO09BQ3ZDOztBQUVELFlBQU0sRUFBRTtBQUNOLFdBQUcsRUFBRTtpQkFBTSxJQUFJLENBQUMsTUFBTTtTQUFBO09BQ3ZCOztBQUVELGNBQVEsRUFBRTtBQUNSLGFBQUssRUFBRSxpQkFBTTtBQUNYLGNBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixxQ0FBMkIsR0FBRyxLQUFLLENBQUM7QUFDcEMsY0FBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ25CLG1CQUFPLElBQUksQ0FBQztXQUNiLE1BQU07QUFDTCwwQkFBYyxHQUFHLE1BQU0sQ0FBQztBQUN2QixtQkFBTyxjQUFjLENBQUM7V0FDeEI7U0FDRjtPQUNGOztBQUVELGtCQUFZLEVBQUU7QUFDWixhQUFLLEVBQUUsaUJBQU07QUFDWCxjQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDakMscUNBQTJCLEdBQUcsSUFBSSxDQUFDO0FBQ25DLGNBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUNsQixtQkFBTyxJQUFJLENBQUM7V0FDZCxNQUFNO0FBQ0wsMEJBQWMsR0FBRyxNQUFNLENBQUM7QUFDdkIsbUJBQU8sY0FBYyxDQUFDO1dBQ3hCO1NBQ0Y7T0FDRjtLQUNGLENBQUMsQ0FBQztHQUNKIiwiZmlsZSI6Im5vZGUtaXRlcmF0b3Itc2hpbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCB3aGF0VG9TaG93LCBmaWx0ZXIgPSBudWxsKSB7XG4gIHZhciBpdGVyID0gX2NyZWF0ZS5jYWxsKHdpbmRvdy5kb2N1bWVudCwgcm9vdCwgd2hhdFRvU2hvdywgZmlsdGVyLCBmYWxzZSk7XG4gIHJldHVybiB0eXBlb2YoaXRlci5yZWZlcmVuY2VOb2RlKSA9PT0gJ3VuZGVmaW5lZCcgPyBzaGltKGl0ZXIsIHJvb3QpIDogaXRlcjtcbn1cblxuXG5mdW5jdGlvbiBzaGltKGl0ZXIsIHJvb3QpIHtcbiAgdmFyIF9yZWZlcmVuY2VOb2RlID0gcm9vdDtcbiAgdmFyIF9wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWU7XG5cbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoTm9kZUl0ZXJhdG9yLnByb3RvdHlwZSwge1xuICAgIHJvb3Q6IHtcbiAgICAgIGdldDogKCkgPT4gaXRlci5yb290XG4gICAgfSxcblxuICAgIHdoYXRUb1Nob3c6IHtcbiAgICAgIGdldDogKCkgPT4gaXRlci53aGF0VG9TaG93XG4gICAgfSxcblxuICAgIGZpbHRlcjoge1xuICAgICAgZ2V0OiAoKSA9PiBpdGVyLmZpbHRlclxuICAgIH0sXG5cbiAgICByZWZlcmVuY2VOb2RlOiB7XG4gICAgICBnZXQ6ICgpID0+IF9yZWZlcmVuY2VOb2RlXG4gICAgfSxcblxuICAgIHBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlOiB7XG4gICAgICBnZXQ6ICgpID0+IF9wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZVxuICAgIH0sXG5cbiAgICBkZXRhY2g6IHtcbiAgICAgIGdldDogKCkgPT4gaXRlci5kZXRhY2hcbiAgICB9LFxuXG4gICAgbmV4dE5vZGU6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBpdGVyLm5leHROb2RlKCk7XG4gICAgICAgIF9wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3JlZmVyZW5jZU5vZGUgPSByZXN1bHQ7XG4gICAgICAgICAgIHJldHVybiBfcmVmZXJlbmNlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcmV2aW91c05vZGU6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBpdGVyLnByZXZpb3VzTm9kZSgpO1xuICAgICAgICBfcG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGUgPSB0cnVlO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9yZWZlcmVuY2VOb2RlID0gcmVzdWx0O1xuICAgICAgICAgICByZXR1cm4gX3JlZmVyZW5jZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIuLyJ9