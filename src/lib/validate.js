export let ratingIsValid = function(rating, minRating, maxRating) {
  if (rating >= minRating && rating <= maxRating) return true
  return false
}

export let valuesNotZeroOrLess = function(...values) {
  let filteredValues = values.filter(value => value > 0)

  if (values.length === filteredValues.length) return true

  return false
}

export let valuesNotNegative = function(...values) {
  let filteredValues = values.filter(value => value >= 0)
  
  if (values.length === filteredValues.length) return true
  
  return false
}

export let minLessThanMax = function(minRating, maxRating) {
  return minRating < maxRating
}

export default function (rating, minRating, maxRating, starRatio) {
  return ratingIsValid(rating, minRating, maxRating)
    && valuesNotNegative(rating, minRating, maxRating)
    && valuesNotZeroOrLess(starRatio)
    && minLessThanMax(minRating, maxRating)
}