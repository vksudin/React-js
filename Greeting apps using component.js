//Index.js
import React from "react";
// var React=require('react');
import ReactDOM from "react-dom";

import App from './App.jsx';
// var ReactDOM=require('react-dom');




ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

//App.js
import React from "react";

import './index.css';
function App()
{
    let curDate=new Date();

let greeting='';
const cssStyle={
  color:'green'
};

let curHours=curDate.getHours();

if(curHours>=1 && curHours<12)
{
  greeting='Good Morning';
  cssStyle.color='green';
}
else if(curDate>=12 && curDate<19)
{
  greeting='Good Afternoon';
  cssStyle.color='orange';
}
else{
  greeting='Good Night';
  cssStyle.color='blue';
}

return (
    <>
  <div>
  <h1>Hello Sir,<span style={cssStyle}>{greeting}</span> </h1>
  </div>
  </>
);

}

export default App;
