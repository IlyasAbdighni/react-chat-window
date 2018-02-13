'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileMessage = function FileMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--file' },
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-name' },
      _react2.default.createElement(
        'a',
        { href: props.data.file.url ? props.data.file.url : '#', target: '_blank' },
        props.data.file.name
      )
    ),
    props.data.text ? _react2.default.createElement(
      'div',
      { className: 'sc-message--file-text' },
      props.data.text
    ) : '',
    props.data.meta && _react2.default.createElement(
      'p',
      { className: 'sc-message--meta' },
      props.data.meta
    )
  );
};

exports.default = FileMessage;
module.exports = exports['default'];