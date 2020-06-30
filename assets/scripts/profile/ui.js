'use strict'

const store = require('./../store')
const events = require('./events')

const createProfileSuccess = function(response) {
console.log(response)
$('form').trigger('reset')
}
const showProfileSuccess = function(response) {
console.log(response)
$('form').trigger('reset')
}
const updateProfileSuccess = function(response) {
console.log(response)
$('form').trigger('reset')
}
const deleteProfileSuccess = function(response) {
console.log(response)
$('form').trigger('reset')
}
const profileFailure = function(response) {
  console.log(response)
  $('#message').text('Failure')
  $('form').trigger('reset')
}

module.exports = {
  createProfileSuccess,
  showProfileSuccess,
  updateProfileSuccess,
  deleteProfileSuccess,
}
