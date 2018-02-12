'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--file' },
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-name' },
      _react2.default.createElement(
        'a',
        { href: '#', target: '_blank' },
        props.data.file.name
      )
    ),
    props.data.text ? _react2.default.createElement(
      'div',
      { className: 'sc-message--file-text' },
      props.data.text && props.data.text
    ) : ''
  );
};

module.exports = exports['default'];