import React from 'react';
import './Todo.css'
import PropTypes from 'prop-types';

const Todo = (props) => {
    const taskClassName = props.text.isChecked ? "Checked" : "NotChecked";
    return <div className="Todo">
        <input 
            checked={props.text.isChecked}
            type="checkbox" 
            className="Checkbox" 
            onClick={() => {
                props.onCheck(props.id);
            }}/>
        <div 
            className={taskClassName}
            contentEditable="true"
            onInput={e => {
                // console.log(e.target.innerHTML);
                props.onEdit(props.id, e.target.innerHTML);
            }}> 
            {props.text.value}
        </div>
        <button 
            className="Delete" 
            onClick={() => {
                props.onSelect(props.id)
            }}>
        x
        </button>
    </div>
};

Todo.propTypes = {
    text: PropTypes.shape({
        value: PropTypes.string,
        isChecked: PropTypes.bool,
    }),
    key: PropTypes.number,
    id: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
}

export default Todo;