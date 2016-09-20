var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hashHistory} = require('react-router');
var {Provider} = require('react-redux');


var actions = require('actions') ;
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
// import Main from 'Main';
import TodoApp from 'TodoApp';
import Login from 'Login';

store.dispatch(actions.startAddTodos());

// Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="todos" component={TodoApp}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
