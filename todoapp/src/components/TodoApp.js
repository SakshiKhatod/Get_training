
import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
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

  const handleCheckboxChange=(id)=>{
    const newTodoList=[...tasklist].map(task=>{
        if(task.id===id)
          return {...task,isCompleted:!task.isCompleted}
      return task;
      })
      setTaskList(newTodoList)

  }

  const handlePendingList = () => {
    setTaskList(tasklist)
    let filtered = tasklist.filter(task => {
      return !task.isCompleted;
  });
  setTaskList(filtered);
}


return (
  <div className="todo">
     <button className="pending-btn" onClick={handlePendingList}>Pending Task</button>
  <input
    type="text"
    name="text"
    id="text"
    maxLength="35"
    onChange={(e) => handleChange(e)}
    placeholder="Add task here..."
  />
  <button className="add-btn" onClick={AddTask}>
    +
  </button>
  <br />
  {tasklist !== [] ? (
    <ul>
      {tasklist.map((t) => (   
        <li className={t.isCompleted ? "crossText" : "listitem"}>
          {window.localStorage.setItem(t,'#content')}
          <input classname ="check" type="checkbox"
           id="isCompleted"
           style={{margin:"0 10px"}}
           checked={t.isCompleted}
           onChange={()=>handleCheckboxChange(t.id)}/> 
          <span id="content" contentEditable="true" style={{width: '100%'}}>{t.value}</span> 
          <button className="delete" onClick={(e) => deletetask(e, t.id)}>
           X
          </button>
        </li>
      ))}
    </ul>
  ) : null}
</div>
 );
}
export default TodoApp;