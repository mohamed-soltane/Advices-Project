import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends  Component {
  state = { advice: '' }
  componentsDidMount(){
      console.log('hello')
  }
  render(){
     return (
         <h1> App</h1>
     );
  }
}


export default App;
