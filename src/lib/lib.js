export let ratingIsValid = function(rating, minRating, maxRating) {
  if (rating >= minRating && rating <= maxRating) return true
  return false
}