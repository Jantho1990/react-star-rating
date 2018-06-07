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
        <img src={logo} className="App-logo" alt="logo" />
        <StarRating rating={7} />
      </div>
    );
  }
}

export default App;
