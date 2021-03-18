import React from 'react'
import './Clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
        }, 1000);
    }

    render() {
        var circleStyle = {
            padding:10,
            margin:20,
            display:"inline-block",
            backgroundColor: 'antiquewhite',
            borderRadius: "50%",
            width:200,
            height:200,
          };
        var lineStyle = {
            width:2,
            height: 70,
            background: 'black',
            top: 30,
        };
        return(
            <div className="Clock" style={circleStyle}>
                {this.state.seconds} seconds
                <div className="Line" style={lineStyle}></div>
            </div>
        );
    }
}

export default Clock;