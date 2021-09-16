import React from "react";
// var React=require('react');
import ReactDOM from "react-dom";
import './index.css'
// var ReactDOM=require('react-dom');

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


ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir,<span style={cssStyle}>{greeting}</span> </h1>
  </div>
  </>,
  document.getElementById('root')
);
