var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'walk the dog.'},
        { id: uuid(), text: 'clean the yard.'},
        { id: uuid(), text: 'leave mail on porch.'},
        { id: uuid(), text: 'play video games.'}
      ]
    };
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function (todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText
        }
      ]
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h3>TodoApp Component</h3>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
