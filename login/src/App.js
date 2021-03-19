import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit() {
    if(this.state.username === '' || this.state.password === '') {
      window.alert(`Username or Password is/are empty`);
    }
    else{
      window.alert(`Welcome, ${this.state.username}!`);
    }
  }

  render() {
    return(
      <div className="App">
        <label>
          Username:<input label="Username" type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Password:<input label="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}></input>
        </label>
        <br></br>
        <br></br>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Login</button>
      </div>
    );
  }
}

export default App;
