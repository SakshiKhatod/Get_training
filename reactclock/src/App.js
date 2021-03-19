import React from 'react';
import './App.css';
import Clock  from './components/Clock/Clock';

class App extends React.Component{
 constructor(props){
   super(props)
   this.state = {
     noOfClock: 0,
   }
 }

 render(){
   return(
     <div className="App">
       <div>
         <button className="icon" onClick={()=>this.setState({ noOfClock: this.state.noOfClock + 1})}
         > + </button>
         <button className="icon" onClick={()=>this.setState({ noOfClock: Math.max(this.state.noOfClock - 1, 0)})}
         > - </button>
       </div>  
       {[...Array(this.state.noOfClock).keys()].map(()=>(
          <Clock label="secs"></Clock>  
       ))} 
     </div>    
   );
 }
}

export default App;
