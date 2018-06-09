import React, { Component } from 'react'
import inputIsValid from '../lib/validate'

export default class RatingInputs extends Component {
  constructor() {
    super()
    this.handleRating =  this.handleRating.bind(this)
  }
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2,
    limit: 1000
  }

  handleRating () {
    let rating = Number(this.refs.rating.value)
    let minRating = Number(this.refs.minRating.value)
    let maxRating = Number(this.refs.maxRating.value)
    let starRatio = Number(this.refs.starRatio.value)

    if (inputIsValid(rating, minRating, maxRating, starRatio, this.props.limit)) {
      this.props.onStarRatingsUpdate({
        rating,
        minRating,
        maxRating,
        starRatio
      })
    }
  }

  render () {
    let { rating, minRating, maxRating, starRatio } = this.props
    return (
      <div className="rating-inputs">
        <label htmlFor="rating">Rating</label>
        <input type="number" ref="rating" name="rating" value={rating} min={minRating} max={maxRating} onChange={this.handleRating}/>
        <label htmlFor="minRating">Min Rating</label>
        <input type="number" ref="minRating" name="minRating" value={minRating} min="0" max="1000" onChange={this.handleRating}/>
        <label htmlFor="maxRating">Max Rating</label>
        <input type="number" ref="maxRating" name="maxRating" value={maxRating} min="0" max="1000" onChange={this.handleRating}/>
        <label htmlFor="starRatio">Star Ratio</label>
        <input type="number" ref="starRatio" name="starRatio" value={starRatio} min="0" max="1000" onChange={this.handleRating}/>
      </div>
    )
  }
}