import React from 'react';
import './App.css';
import './components/Clock/Clock';
import Clock from './components/Clock/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <Clock />
        <div>
          {console.log(this.state.count)}
        </div>
        <button className="btn" 
        onClick={() => this.setState({count: this.state.count + 1})}>
          +
        </button>
        <button className="btn" 
        onClick={() => this.setState({count: Math.max(this.state.count - 1, 0)})}>
          -
        </button>
      </div>
    );
  }
}

export default App;
