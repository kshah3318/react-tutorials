import React from 'react'
import ReactDOM from 'react-dom'


/*let obj={
  name:'Karan',
  lname:'Shah'
}
let name = 'Hem Shah'
const element = <h1>Welcome to React {name}</h1>*/
function  cartoon(name='Pokemon',show='11:00 am'){
  return <div>
  <h1 className="some-class">Cartoon name is {name} and its show is {show}</h1>
  <h2>Hello Karan</h2>
  </div>
}
ReactDOM.render(
  cartoon('Tom and Jerry','10:am'),
  document.getElementById('root')
);
