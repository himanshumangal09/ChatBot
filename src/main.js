import React from 'react';
import './main.css';
import './dev.config';
const axios = require("axios");


class Main extends React.Component {
  state = {
    inputvalue : '',
    outputvalue:''
  }
  helprender = () => {
    console.log("button was clicked")
     this.setState({inputvalue:document.querySelector('input').value});
axios({
  "method":"GET",
  "url":"https://acobot-brainshop-ai-v1.p.rapidapi.com/get",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"RAPID API HOST",
  "x-rapidapi-key":"RAPID API KEY "
  },"params":{
  "bid":"BRAINSHOP BRAIN ID",
  "key":"BRAINSHOP API KEY",
  "uid":"BRAINSHOP USER ID ",
  "msg":`${this.state.inputvalue}`
  }
  })
    .then((response)=>{
      console.log(response.data.cnt)
      this.setState({outputvalue:response.data.cnt})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
 render() {
     return (
    <div>
        <input  placeholder="Type Something" className="input" type="text"></input>
        <div className="output">
        {this.state.outputvalue}
        </div>
        <button  className="btn btn-primary button block" onClick={this.helprender}>SUBMIT </button>
     </div>);
}
}
export default Main; 