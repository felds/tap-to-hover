'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

document.registerElement('felds-tap-to-hover', function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this._interact = this._interact.bind(this);
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      this.addEventListener('touchstart', this._interact, { passive: true });
      this.addEventListener('mousemove', this._interact);
      this.addEventListener('mouseleave', this._interact);
    }
  }, {
    key: '_interact',
    value: function _interact(e) {
      var className = this.getAttribute('hover-class') || '_ftth-hover';
      var querySelector = this.getAttribute('query-selector');
      var ch = querySelector ? this.querySelectorAll(querySelector) : this.children;

      console.log(ch);

      for (var i = 0; i < ch.length; i++) {
        var el = ch.item(i);
        e.path.indexOf(el) >= 0 ? el.classList.add(className) : el.classList.remove(className);
      }
    }
  }]);

  return _class;
}(HTMLElement));
//# sourceMappingURL=tap-to-hover.js.map