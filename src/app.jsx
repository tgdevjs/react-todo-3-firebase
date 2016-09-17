var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions') ;
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import './../playground/firebase/arrays';

store.subscribe(() => {
  var state = store.getState();
  console.log('New state: ', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle');


// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp/>
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
