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

var _textfieldJs = require('./textfield.js');

var _textfieldJs2 = _interopRequireDefault(_textfieldJs);

var _spectangularJs = require('../spectangular.js');

var _spectangularJs2 = _interopRequireDefault(_spectangularJs);

var Searchfield = (function (_Textfield) {
  _inherits(Searchfield, _Textfield);

  function Searchfield() {
    _classCallCheck(this, Searchfield);

    _get(Object.getPrototypeOf(Searchfield.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Searchfield, [{
    key: 'setValue',
    value: function setValue(value) {
      _get(Object.getPrototypeOf(Searchfield.prototype), 'setValue', this).call(this, value);

      _spectangularJs2['default'].select().clickItem({ index: 0 });

      return this;
    }
  }]);

  return Searchfield;
})(_textfieldJs2['default']);

exports['default'] = Searchfield;
module.exports = exports['default'];
