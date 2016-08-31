var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        { id: 1, text: 'walk the dog.'},
        { id: 2, text: 'clean the yard.'},
        { id: 3, text: 'leave mail on porch.'},
        { id: 4, text: 'play video games.'}
      ]
    };
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h3>TodoApp Component</h3>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
