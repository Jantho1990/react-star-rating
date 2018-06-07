import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class StarRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
      maxStars: this.maxStars(),
      fullStars: this.fullStars(),
      halfStars: this.halfStars(),
      emptyStars: this.emptyStars()
    }
  }

  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2
  }

  fullStars() {
    let { rating, starRatio } = this.props
    return Math.floor(rating / starRatio)
  }

  halfStars() {
    let { rating, starRatio } = this.props
    let x = rating % starRatio
    let i = (1 / 2) * starRatio
    return x >= i ? 1 : 0
  }

  emptyStars() {
    let { rating, starRatio } = this.props
    let maxStars = this.maxStars()
    let x = rating % starRatio
    let y = maxStars - rating / starRatio
    return (1 / 2) * starRatio > x ? Math.ceil(y) : Math.floor(y)
  }

  maxStars() {
    let { maxRating, starRatio } = this.props
    return Math.floor(maxRating / starRatio)
  }

  render() {
    let { fullStars, halfStars, emptyStars } = this.state

    let renderFullStars = () => {
      return fullStars !== 0
        ? Array(fullStars)
            .fill(null)
            .map((item, i) => {
              return <FontAwesomeIcon key={`fs${i}`} icon="star" />
            })
        : ''
    }

    let renderHalfStars = () => {
      return halfStars !== 0
        ? Array(halfStars)
            .fill(null)
            .map((item, i) => {
              return (
                <span key={`hs${i}`} className="fa-layers fa-fw">
                  <FontAwesomeIcon icon="star-half" />
                  <FontAwesomeIcon icon={['far', 'star-half']} flip="horizontal"/>
                </span>
              )
            })
        : ''
    }

    let renderEmptyStars = () => {
      return emptyStars !== 0
        ? Array(emptyStars)
          .fill(null)
          .map((item, i) => {
            return <FontAwesomeIcon key={`es${i}`} icon={['far', 'star']} />
          })
        : ''
    }

    return (
      <div className="star-rating">
        {renderFullStars()}
        {renderHalfStars()}
        {renderEmptyStars()}
      </div>
    )
  }
}
