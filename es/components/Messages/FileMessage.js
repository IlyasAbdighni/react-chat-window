import React from 'react';

export default (function (props) {
  return React.createElement(
    'div',
    { className: 'sc-message--file' },
    React.createElement(
      'div',
      { className: 'sc-message--file-name' },
      React.createElement(
        'a',
        { href: '#', target: '_blank' },
        props.data.file.name
      )
    ),
    props.data.text ? React.createElement(
      'div',
      { className: 'sc-message--file-text' },
      props.data.text && props.data.text
    ) : ''
  );
});