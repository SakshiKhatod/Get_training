import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



let todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Do code", done: true});
todoItems.push({index: 3, value: "Add water to plants", done: true});


class TodoList extends React.Component {
  render () {
    let filter = this.props.filter;
    let items;
    if(!filter){
      items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} 
          removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
    }else{
      let filteredItems = [];
      filteredItems = todoItems.filter(item => item.done === false);
      items = filteredItems.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} 
          removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
    }
    return (

      <ul className="list-group" maxLength="70"> {items} </ul>
    );
  }
}


class TodoListItem extends React.Component {
constructor(props) {
super(props);
this.onClickClose = this.onClickClose.bind(this);
this.onClickDone = this.onClickDone.bind(this);
}
onClickClose() {
let index = parseInt(this.props.index);
this.props.removeItem(index);
}
onClickDone() {
let index = parseInt(this.props.index);
this.props.markTodoDone(index);
}

render () {
let todoClass = this.props.item.done ? 
    "done" : "undone";
    const styles = {
     height:"47px",
     width:"42px",
  padding:"10px",
    

  };
return(
  <li className="list-group-item ">
    <div className={todoClass}>
      <span className="glyphicon glyphicon-ok icon" aria-hidden="true" 
      onClick={this.onClickDone}></span>
      <span  style={styles} contentEditable="true" maxLength="70">{this.props.item.value}</span>
      <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
    </div>
  </li>     
);
}
}

class TodoForm extends React.Component {
constructor(props) {
super(props);
this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
this.refs.itemName.focus();
}
onSubmit(event) {
event.preventDefault();
let newItemValue = this.refs.itemName.value;

if(newItemValue) {
  this.props.addItem({newItemValue});
  this.refs.form.reset();
}
}
render () {
return (
  <li className="list-group-item ">
  <form ref="form" onSubmit={this.onSubmit} className="form-inline">
    <input contentEditable="true" type="text"    maxlength="70" ref="itemName" className="form-control"
      placeholder="add a new todo...(maximum length 70 characters)" />
    <button type="submit" className="btn btn-default">+</button>
  </form>
</li>
);   
}
}

class TodoHeader extends React.Component {

render () {
return <h1 text-align="center">Todo list</h1>;
}
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
    }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    let todo = todoItems[itemIndex];
    todo.done = !todo.done;
    this.setState({todoItems: todoItems});  
  }
  
  render() {
    let filter = this.state.isChecked;
    return (
      <div id = "main">
        
        <TodoHeader />
      <label>
        <input type="checkbox"
          defaultChecked={this.state.isChecked}
          onChange={this.toggleChange}
        />
         Show pending tasks
      </label>
      
      <TodoList filter = {filter} items={this.props.initItems}
       removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
      <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}


ReactDOM.render(<Checkbox initItems={todoItems}/>, document.getElementById('app'));

