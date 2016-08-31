var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('root')
);
