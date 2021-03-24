import React, { useState } from 'react';
import './App.css'
import Todo from './components/Todo/Todo';
import Switch from 'react-switch'

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  const [switchState, setSwitchState] = useState(false);

  const handleTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    const todo = { value: todoText, isChecked: false,};
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
    setTodoText('');
  };

  const handleKeyPress = (e) => {
    const code = e.keyCode || e.which;
    if(code === 13 && todoText !== '') {
      addTodo();
    }
  }

  const deleteTodo = (indexToDelete) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((_, index) => {
        return index !== indexToDelete;
      });
    });
  };

  const checkTodo = (indexToCheck) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo, index) => {
        if(index === indexToCheck) {
          const check = todo.isChecked;
          todo = {value: todo.value, isChecked: !check,}
          return todo;
        }
        return todo;
      });
    });
  };

  const editTodo = (indexToEdit, editedTodo) => {
    console.log(editedTodo);
    console.log(indexToEdit);
    // setTodoText(editedTodo);
    // setTodos((prevTodos) => {
    //   return [...prevTodos.slice(0, indexToEdit), editedTodo, ...prevTodos.slice(indexToEdit)];
    // });
  };

  const handleSwitchChange = (checked) => {
    setSwitchState(checked);
    if(checked) {
      // const pendingTodos = todos.filter(todo => todo.isChecked === false);
      // return pendingTodos;
      setTodos((prevTodos) => {
        const pendingTodos = prevTodos.filter(todo => todo.isChecked === false);
        return pendingTodos;
      });
    }
    else {
      return todos;
    }
  }

  return (
    <div className="App">
      <div className="Center">
        <h1>My Todo List</h1>
        <label className="Toggle">
          <Switch
            checked={switchState}
            onChange={handleSwitchChange} 
          />
          <span>Pending</span>
        </label>
        <ul className="List">
          {todos.map((todo, index) => {
            return <Todo 
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
          minLength="3"
          maxLength="100"
          placeholder="Your text here" 
          onChange={handleTodoText}
          onKeyPress={handleKeyPress}
          value={todoText}/>
        <button onClick={addTodo} disabled={todoText === ''}>+</button>
      </div>
    </div>
  )
}

export default App;