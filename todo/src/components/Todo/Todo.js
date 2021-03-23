import React from 'react';
import './Todo.css'
import PropTypes from 'prop-types';
// import {maxlengthContentEditable} from 'maxlength-contenteditable';

const Todo = (props) => {
    if(props.text.isChecked) {
        return <div className="Todo">
            <input 
                type="checkbox" 
                className="Checkbox" 
                onClick={() => {
                    props.onCheck(props.id);
                }}/>
            <div className="Checked" contentEditable="true" data-max-length="10" data-min-length="3"> {props.text.value} </div>
            <button 
                className="Delete" 
                onClick={() => {
                    props.onSelect(props.id)
                }}>
            x
            </button>
        </div>
    }

    return <div className="Todo">
        <input 
            type="checkbox" 
            className="Checkbox" 
            onClick={() => {
                props.onCheck(props.id);
            }}/>
        <div className="NotChecked" contentEditable="true" data-max-length="10" data-min-length="3"> {props.text.value} </div>
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
    onSelect: PropTypes.func,
    onCheck: PropTypes.func
}

export default Todo;