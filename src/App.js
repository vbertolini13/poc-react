import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';

class App extends Component {

  componentDidMount() {
    console.log('App => componentDidMount');
  }
  
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;