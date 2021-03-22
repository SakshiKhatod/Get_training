import React, { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList/TodoList';

function App() {
  const [TodoText, setTodoText] = useState('');
  const [TodoArray, setTodoArray] = useState([]);

  const handleTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    setTodoArray((prevTodos) => {
      return [...prevTodos, TodoText];
    });
    setTodoText('');
  };

  const deleteTodo = (id) => {
    console.log('deleted');
    setTodoArray((prevTodos) => {
      return prevTodos.filter((todo, index) => {
        return index !== id;
      });
    });
  };

  const checkTodo = (id) => {
    setTodoArray((prevTodos) => {
      return prevTodos.map((todo, index) => {
        if(index === id) {
          return <del>{todo}</del>
        }
        return todo;
      });
    });
  };

  const editTodo =(id) => {
    handleTodoText();
    setTodoArray((prevTodos) => {
      prevTodos.splice(id, 0, TodoText);
    });
  };

  return (
    <div className="App">
      <div className="Center">
        <h1>My Todo List</h1>
        <ul className="List">
          {TodoArray.map((todo, index) => {
            return <TodoList 
              text={todo}
              key={index}
              id={index}
              onSelect={deleteTodo}
              onCheck={checkTodo}
              onEdit={editTodo}/>
          })}
        </ul>
        <br></br>
        <input 
          type="text" 
          placeholder="Your text here" 
          onChange={handleTodoText}
          value={TodoText}/>
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  )
}

export default App;