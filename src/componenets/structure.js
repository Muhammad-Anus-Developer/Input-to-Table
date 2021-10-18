import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {FaCheck} from "react-icons/fa";
import {Stocks} from "./table"




$(document).ready(function(){
  $('button').click(function(){
    $('button').parent().addClass('active');
    setTimeout(function(){
      $('button').addClass('success');
    }, 3400);
    setTimeout(function(){
      alert("Your Details Has Been Submitted");
      $('button').parent().removeClass('active');
      $('button').removeClass('success');
    }, 4200);
  });
});


class Structure extends React.Component {
state = {
  userName : "",
  name : "",
  email : "",
  password : ""
};

getValue = (e) =>{

  const name = e.target.name
  const value = e.target.value
  
  this.setState({[name]: value})
  }
  


buttonSubmit = ()=>{

  const userName = this.state.userName;
  const name = this.state.name;
  const email = this.state.email;
  const password = this.state.password;
 
  
  let dataArr = {userNameSubmit : userName, nameSubmit : name, emailSubmit : email , passwordSubmit : password }
//   const json_data = JSON.stringify(dataArr)
  
  console.log(dataArr) 


// setTimeout(()=>{
//     let first = document.getElementById("hi")
//     first.style.display = "block"

    
// },4200)


  




const fs = require("browserify-fs")
// console.log(fs.writeFile("./data.json"))

const SendData = (dataArr)=>{
const Finished = (error)=>{
    if(error){
      console.error(error);
      return;
    }
}

  const jsonData = JSON.stringify(dataArr,null,2)
  console.log(jsonData)
  
fs.writeFile("./data.json", jsonData , Finished)

  }

SendData(dataArr)
  
}




render(){
  // const InlineHook = this._renderData();

  return (
    
    <div className="App">
  
<h1 className="bg-info text-white px-5 py-5">Input to Table</h1>

<div className="my-5">

<input type="text" className="px-2 py-2 mx-2" placeholder="Enter Your User Name"  onChange={this.getValue} name = "userName"  />
<input type="text" placeholder="Enter Your Name" className="px-2 py-2 mx-2" onChange={this.getValue} name="name" />
<input type="email" placeholder="Enter Your E-mail" className="px-2 py-2 mx-2" onChange={this.getValue} name = "email" />
<input type="password" placeholder="Enter Your Password" onChange={this.getValue} className="px-2 py-2 mx-2" name = "password" />

</div>


<div className="center">
      <button onClick={this.buttonSubmit} className="btn btn-info">
        <p>Submit</p>
        <div className="loading"></div>
        <div className="text-center"><FaCheck className="tick my-3" /></div>
      </button>
    </div>

<br />
<br />
<Stocks />


    </div>
  );
  }
}

export default Structure;