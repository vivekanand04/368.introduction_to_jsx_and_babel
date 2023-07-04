//METHOD 1: USING REQUIRE KEYWORD AND SETTING IT TO VERIABLE
var React = require("react"); //
var ReactDOM = require("react-dom"); //it give access t react dom moule which come from facebook
//ReactDOM.render(WHAT TO show,WHERE TO SHOW);//,IT is rener funtion of reactdom,IT HAS THREE INPUT ,TISRA NAHI LIKHA HAI USKA USE NAHI HAI
ReactDOM.render(<h1>hello world</h1>, document.getElementById("root")); //<<...DOG...> hello world will get without touching html, uper wala implimentation hai ye,

{
  /*....fun time....
  WRITE TWO HTML CODE THEN 
  ReactDOM.render(<h1>hello world</h1><p > THIS IS OTHER ONE</p>,document.getElementById("root"));
  DONT WORK because here render work for single html element
  solution:  by use dive make it sinle html ellment such as
    ReactDOM.render(
      <div>
      <h1>hello world</h1></div>
    ,document.getElementById("root"));*/
}

{
  /*....fun time.....
 <h1>hello world</h1> is html code then how it is used in this javascript File
ans: it is because of jsx,it get convertd into javascript equivalent by compiler.and compiler comes from including this react module(var React =require("react");)written in first line 
for example bable :it is a  javascript compiler*/
}

{
  /*INSTEAD OF WRITIG DOG WE CAN WRITE 
var h1=document.createElement("h1");
h1.innerHTML="hello world";
document.getElementById("root").appendChi}ld(h1);*/
}

{
  /*METHOD 2: USING OF IMPORT KEYWORD
import react from "react";//it is impoorting of react fromm particular module called react
import ReactDOM from "react-dom";//it is impoorting of reactdom fromm particular module called react-dom*/
}
