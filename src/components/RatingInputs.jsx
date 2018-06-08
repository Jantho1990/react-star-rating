import React, { Component } from 'react'

export default class RatingInputs extends Component {
  constructor() {
    super()
    this.handleRating =  this.handleRating.bind(this)
  }
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2
  }

  handleRating () {
    let rating = Number(this.refs.rating.value)
    let minRating = Number(this.refs.minRating.value)
    let maxRating = Number(this.refs.maxRating.value)
    let starRatio = Number(this.refs.starRatio.value)
    this.props.onStarRatingsUpdate({ rating, minRating, maxRating, starRatio })
  }

  render () {
    let { rating, minRating, maxRating, starRatio } = this.props
    return (
      <div className="rating-inputs">
        <input type="range" ref="rating" value={rating} min={minRating} max={maxRating} onChange={this.handleRating}/>
        <input type="number" ref="minRating" value={minRating} onChange={this.handleRating}/>
        <input type="number" ref="maxRating" value={maxRating} onChange={this.handleRating}/>
        <input type="number" ref="starRatio" value={starRatio} onChange={this.handleRating}/>
      </div>
    )
  }
}