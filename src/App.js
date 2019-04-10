import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Errors} from 'react-formio';
import Iframe from 'react-iframe'
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import Header from './Header';

class App extends Component {

  constructor(props){
    super(props)
  }

  state={
    url : "",
    embedUrl : "",
    frameSrc : ""
  }

  handleChange(event){
    this.setState({
      url:event.target.value
    })
  }

  handleFileChange(event){
    var x = document.getElementById("myFile").files[0];
    var reader = new FileReader();
    reader.readAsDataURL(x);            
    reader.onload = function () {
            this.setState({
              frameSrc: reader.result
            })
    }.bind(this);
  }

  handleClick(){
    this.setState({
      embedUrl: this.state.url
    })
    document.getElementById("formio-div").style.backgroundColor="white";
  }

  render() {
    return (
      <div>
          <Header/>
          <Row>
            <Col className="justify-content-md-center">
              <input type="file" id="myFile" onChange={this.handleFileChange.bind(this)}></input>
              <Iframe url={this.state.frameSrc} width="90%" height="700px"/>
            </Col>
            <Col className="justify-content-md-center">
            <InputGroup>
              <FormControl type="text" aria-label="With textarea" onChange={this.handleChange.bind(this)}/>
              <InputGroup.Append>
                <Button onClick={this.handleClick.bind(this)}>Fill Form</Button>
              </InputGroup.Append>
            </InputGroup>
              <div className="formio-div" id="formio-div">
                <Form src={this.state.embedUrl} >
                </Form>
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
