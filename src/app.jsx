var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hashHistory} = require('react-router');

// Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <p>react-boilerplate-3</p>,
  document.getElementById('root')
);
