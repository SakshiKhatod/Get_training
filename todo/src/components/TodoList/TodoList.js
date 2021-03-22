import React from 'react';
import './TodoList.css'

const TodoList = (props) => {

    return <div className="TodoList">
        <input 
            type="checkbox" 
            className="Checkbox" 
            onClick={() => {
                props.onCheck(props.id);
            }}/>
        <li> {props.text} </li>
        {/* <button
            className="Edit"
            onClick={() => {
                props.onEdit(props.id)
            }}>
            Edit
        </button> */}
        <button 
            className="Delete" 
            onClick={() => {
                props.onSelect(props.id)
            }}>
        x
        </button>
    </div>
};

export default TodoList;