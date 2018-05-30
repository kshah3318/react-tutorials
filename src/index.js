import React from 'react'
import ReactDOM from 'react-dom'


class Clocks extends React.Component{
  //Method to create state
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    }
}
componentDidMount(){
  //alert('HI');
  this.timer=setInterval(() => this.start(),1000);
}
componentWillUnmount(){
  clearInterval(this.timer)
}
start(){
  this.setState({
    date: new Date()
  });
}

  render(){
    return <h1>Time is:{this.state.date.toLocaleTimeString()}</h1>
  }
}



function time(){
  ReactDOM.render(
      <Clocks />,
      document.getElementById('root')
  );
}
setInterval(time,1000);
