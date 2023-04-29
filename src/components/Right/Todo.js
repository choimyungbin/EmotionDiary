import React, { useState } from 'react';
const Todo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('');
  const handleTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodo('');
    onAddTodo(newTodo);
    return newTodo;
  };
  const handleTextChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div id='todo-div'>
      <h1>To-do List</h1>
      <form id='todo-form' onSubmit={handleTodo}>
        <input
          type='text'
          value={todo}
          onChange={handleTextChange}
          placeholder='Write a Todo and Press Enter'
          required
        />
      </form>
      <ul id='todo-list'></ul>
    </div>
  );
};
export default Todo;
