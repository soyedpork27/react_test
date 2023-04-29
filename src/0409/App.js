import React, { Component } from 'react';

import TodoListTemplate from './componets/TodoListTemplate';

import Form from './componets/Form';
import TodoItemList from './componets/TodoItemList';



class App extends Component {

  id=3;
  state = {
    input : '',
    todos : [
      {id : 0 , text : '리액트 연습', checked : false},
      {id : 1 , text : '오늘의 할 일', checked : true},
      {id : 2 , text : '데이터베이스 생성', checked : false}
    ]
  }
  
  handleChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }
  
  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input : '',
      todos : todos.concat({
        id : this.id++,
        test:input,
        checked : false
      })
    })
  }

  handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }


  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id)
    });
  }
  handleToggle = (id) => {
    const {todos} =this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    this.setState({
      todos : [
        ...todos.slice(0,index),
        {
          ...selected,
          checked : !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }



  render() {

    const {input, todos} = this.state;
    const {
      handleKeyDown,
      handleChange,
      handleCreate,
      handleToggle,
      handleRemove      
    } = this;

    return (
        <TodoListTemplate form={(<Form value={input} onChange={handleChange} onCreate={handleCreate} onKeyDown={handleKeyDown} onRemove={handleRemove}/>)} >
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
    );
    }
  }
export default App;