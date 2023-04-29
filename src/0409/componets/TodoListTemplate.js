import React from 'react';
import './TodoListTemplate.css';
import Form from './Form';
import TodoItemList from './TodoItemList.js';

function TodoListTemplate(props) {
  return (
    <main className="todo-list-template">
      <header className="title">
        <h2>오늘의 할일</h2>
      </header>

      <section className="form-wrapper">
        <Form />
      </section>

      <section className="todos-wrapper">
        <TodoItemList  />
        목록 리스트
      </section>
    </main>
  );
}

export default TodoListTemplate;