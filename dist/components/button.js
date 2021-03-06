'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

var _componentJs = require('./component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var Button = (function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Button, [{
    key: 'getComponentElByConfig',
    value: function getComponentElByConfig(config) {
      if (config.icon) {
        return this.byIcon(config.icon);
      } else if (config.text) {
        return this.byButtonText(config.text);
      }
      return null;
    }
  }, {
    key: 'byIcon',
    value: function byIcon(icon) {
      var _this = this;

      return this.rootEl.all(by.css(this.selector)).filter(function (buttonEl) {
        return _this.getButtonIcon(buttonEl).then(function (buttonIcon) {
          return buttonIcon.toLowerCase().trim() === icon.toLowerCase().trim();
        });
      });
    }
  }, {
    key: 'byButtonText',
    value: function byButtonText(text) {
      var _this2 = this;

      return this.rootEl.all(by.css(this.selector)).filter(function (buttonEl) {
        return _this2.getButtonText(buttonEl).then(function (buttonText) {
          return buttonText.toLowerCase().trim() === text.toLowerCase().trim();
        });
      });
    }
  }, {
    key: 'getButtonIcon',
    value: function getButtonIcon(buttonEl) {
      if (this.impl.getButtonIcon === undefined) {
        throw 'The library you use does not support getButtonIcon';
      }
      return this.impl.getButtonIcon(buttonEl);
    }
  }, {
    key: 'getButtonText',
    value: function getButtonText(buttonEl) {
      if (this.impl.getButtonText !== undefined) {
        return this.impl.getButtonText(buttonEl);
      }
      return buttonEl.getText();
    }
  }]);

  return Button;
})(_componentJs2['default']);

exports['default'] = Button;
module.exports = exports['default'];
