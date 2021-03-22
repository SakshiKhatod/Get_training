
import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  // const [todoEditing, setTodoEditing] = React.useState(null);
  // const [editingText, setEditingText] = React.useState("");


  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if ( task !== "" ) {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = tasklist.findIndex((elem) => elem.id === id);
    const newTaskList = [...tasklist];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    }; 
    setTaskList(newTaskList);
  };

const handleFilter = () => {
  let filtered = tasklist.filter(task => {
    return !task.isCompleted;
  });
  setTaskList(filtered);
}


return (
  <div className="todo">
  <input
    type="text"
    name="text"
    id="text"
    onChange={(e) => handleChange(e)}
    placeholder="Add task here..."
  />
  <button className="add-btn" onClick={AddTask}>
    Add
  </button>
  <button className="pending-btn" onClick={handleFilter}>Pending Task</button>
  <br />
  {tasklist !== [] ? (
    <ul>
      {tasklist.map((t) => (
        <li contentEditable="true" className={t.isCompleted ? "crossText" : "listitem"}>
          {t.value}
          <button className="completed" onClick={(e) => taskCompleted(e, t.id)}>
            Complete
          </button>
          <button className="delete" onClick={(e) => deletetask(e, t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
   ) : null}
</div>
 );
}

// const handleCheck=(id)=>
  // {
  //   if(task.isCompleted)
  //   return  <span style={{textDecoration:"line-through"}}>{task.value}</span> ;
  //   hanldeCheckboxChange(id)
  // }
  // const hanldeCheckboxChange=(id)=>{
  //   const newTodoList=tasklist.map(task=>{
  //       if(task.id===id)
  //         return {...tasklist,isCompleted:!task.isCompleted}
  //     return task;
  //     })
  //     setTaskList(newTodoList)

  // }

export default TodoApp;