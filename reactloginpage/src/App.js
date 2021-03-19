import React from 'react'
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    userName: '',
    passWord: ''
    }
  }
  handleSubmit(){
    if(this.state.userName === '' || this.state.passWord === '')
    {
      window.alert('insert the credentials')
    }
    else{
      window.alert(`welcome ${this.state.userName}`)
    }
  }
  render(){
    return(
      <div className="App">
        <label>
          Username:
          <input 
            type="text" value={ this.state.userName } className="user"
            onChange={ event => this.setState({ userName: event.target.value} )}/>
          
        </label>
        <label>
          Password:
          <input 
            type="text" value={ this.state.passWord } className="pass"
            onChange={ event => this.setState({ passWord: event.target.value })}/>
          
        </label>
        <button className="submit" onClick={ this.handleSubmit.bind(this) }>Login</button>
      </div>
    )
  }
}

export default App;
