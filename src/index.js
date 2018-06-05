import React from 'react'
import ReactDOM from 'react-dom'
const cartoons = ["Pikachu","Alladin","Tom","Tom"]

function ToonList(props){
  const list=props.cartoon
  const toons = list.map((cartoons,index)=><li key={index}>{cartoons}</li>)
  return <ul>{toons}</ul>
}
ReactDOM.render(
  <ToonList cartoon={cartoons}/>,
  document.getElementById('root')
);
