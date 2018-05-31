import React from 'react'
import ReactDOM from 'react-dom'

class Inc extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter : 0}
    //binding increment variable with increment method

  }
  //passing parameter p as an event
  increment(e){

    /*code to prevent redirection */
    e.preventDefault();
    this.setState({
      counter : this.state.counter + 1
    });
  }
  render(){
    return <button onClick={(e)=>this.increment(e)}>Value is {this.state.counter}</button>
  }
}

ReactDOM.render(
      <Inc />,
      document.getElementById('root')
);
