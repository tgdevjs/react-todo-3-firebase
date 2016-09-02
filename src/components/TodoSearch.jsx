var React = require('react');

var TodoSearch = React.createClass({
  handleSearchTodo: function (e) {

    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.handleSearchTodo(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <h3>TodoSearchComponent</h3>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearchTodo}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
