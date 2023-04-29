import React, { useState, useEffect } from 'react';
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  // const TODOS_KEY = 'todos';
  // const saveTodos = () => {
  //   localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  // };
  const changeTodos = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    changeTodos(newTodo);
    setTodo('');

    // saveTodos();
  };
  useEffect(() => {}, [changeTodos]);
  const handleTextChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (e) => {
    const li = e.target.parentElement;
    setTodos(todos.filter((todo) => todo.id !== parseInt(li.id)));
    li.remove();
    // saveTodos();
  };

  // const savedTodos = localStorage.getItem(TODOS_KEY);
  // if (savedTodos !== null) {
  //   const parsedTodos = JSON.parse(savedTodos);
  //   setTodos(parsedTodos);
  // }

  return (
    <div id='todo-div'>
      <h1>To-do List</h1>
      <form id='todo-form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          onChange={handleTextChange}
          placeholder='Press Enter to submit'
          required
        />
      </form>
      <ul id='todo-list'>
        {todos.map((it) => (
          <li key={it.id}>
            {it.text}
            <button onClick={handleDelete}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
