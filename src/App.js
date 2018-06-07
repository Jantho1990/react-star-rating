import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StarRating from './components/StarRating'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(solid, regular)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StarRating />
      </div>
    );
  }
}

export default App;
