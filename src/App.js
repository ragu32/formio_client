import React, { Component } from 'react';
import './App.css';
import {Form} from 'react-formio';
import Iframe from 'react-iframe'
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import Header from './Header';

class App extends Component {

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
            <Col>
              <input type="file" id="myFile" onChange={this.handleFileChange.bind(this)}></input>
              <Iframe url={this.state.frameSrc} width="90%" height="700px"/>
            </Col>
            <Col>
              <InputGroup>
                <FormControl placeholder="Enter path" onChange={this.handleChange.bind(this)}></FormControl>
                <InputGroup.Append><Button onClick={this.handleClick.bind(this)}>Fill Form</Button></InputGroup.Append>
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
