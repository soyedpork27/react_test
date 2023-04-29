import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const {todos,onToggle,onRemove} = this.props;

    const todoList = todos && todos.map(({id, text, checked}) => (
    <TodoItem 
      id={id}
      text ={text}
      checked={checked}
      onToggle={onToggle}
      onRemove={onRemove}
      key={id}/>
      )
    )
    return (
    <>
    {todoList}
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  )}
}

export default TodoItemList;