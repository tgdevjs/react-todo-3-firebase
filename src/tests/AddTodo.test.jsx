var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('handleAddTodo', () => {
    it('should call handleAddTodo if valid todo text entered', () => {
      var todoText = 'check mail';
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);

    });

    // it('should not call handleAddTodo if invalid todo text entered', () => {});
    it('should not call handleAddTodo if invalid todo text entered', () => {
      var todoText = "";
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});
