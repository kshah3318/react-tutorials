import React from 'react'
import ReactDOM from 'react-dom'

//Use of component
//Component name must start with capital letters
//To define component function using method
/*function Cartoon(props){
  return <h1>Hello , {props.name}</h1>
}*/

//Define component using class
class Cartoon extends React.Component{
  render(){
    return <h1>Hello , {this.props.name} {this.props.show}</h1>
  }
}
function Show(){
  return <div>
    <Cartoon name="Pikachu" show="Pokemon"/>
    <Cartoon name="Jasmine" show="Allahdin"/>
  </div>
}
  ReactDOM.render(
    <Show />,
    document.getElementById('root')
  );
