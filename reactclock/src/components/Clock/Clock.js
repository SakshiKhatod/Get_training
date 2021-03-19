import React from 'react';
import './Clock.css'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
          seconds: 0,   
        };
        this.intervalID = null; 
    }
    componentDidMount(){
        this.intervalID=setInterval(()=>{
            console.log('increasing seconds');
            this.setState({seconds: this.state.seconds + 1})
        },1000)
    }
    componentWillUnmount(){
        console.log('clearing interval')
        clearInterval(this.intervalID)
    }
    render(){
        return(
            <>
            <div className="Clock" >
                {this.state.seconds}  {this.props.label || 'seconds'}     
            <div id="logo">	<span className="speedometer"></span>
            <span className="needle"></span>
            </div>
            </div>
          </>
        );
    }
}

export default Clock;