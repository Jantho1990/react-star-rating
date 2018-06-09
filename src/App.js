import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StarRating from './components/StarRating'
import RatingInputs from './components/RatingInputs'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(solid, regular)

class App extends Component {
  constructor () {
    super()
    this.state = {
      rating: 5,
      minRating: 0,
      maxRating: 10,
      starRatio: 2
    }
    this.handleStarRatingsUpdate = this.handleStarRatingsUpdate.bind(this)
  }

  handleStarRatingsUpdate(data) {
    this.setState({
      ...this.state,
      ...data
    })
  }
  
  render() {
    let {rating, minRating, maxRating, starRatio} = this.state
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <StarRating
          rating={rating}
          minRating={minRating}
          maxRating={maxRating}
          starRatio={starRatio}
        />
        <RatingInputs
          rating = {rating}
          minRating = {minRating}
          maxRating = {maxRating}
          starRatio = {starRatio}
          onStarRatingsUpdate = {this.handleStarRatingsUpdate}
          />
      </div>
    );
  }
}

export default App;
