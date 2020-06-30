const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onCreateReview = function(form) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.createReview(data)
    .then(ui.createReviewSuccess)
    .catch(ui.reviewFailure)
}
const onUpdateReview = function(form) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateReview(data)
    .then(ui.updateReviewSuccess)
    .catch(ui.reviewFailure)
}
const onDeleteReview = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteReview(data)
    .then(ui.deleteReviewSuccess)
    .catch(ui.reviewFailure)
}

module.exports={
  onCreateReview,
  onUpdateReview,
  onDeleteReview
}
