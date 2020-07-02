'use strict'

const store = require('../store')
const events = require('./events')


const signUpSuccess = function(response) {
  console.log('Signed up successfully ' + response.user.email)
  $('form').trigger('reset')
}
const signInSuccess = function(response) {
  console.log(response)
  $('#message').text(`${response.user.email} owner id: ${response.user._id}`)
  store.user = response.user
  $('form').trigger('reset')
  $('.unauth').hide()
  $('.auth').show()
  $('#clear-profiles-button').hide()
}
const changeSuccess = function() {
  $('#message').text('password changed!')
  $('form').trigger('reset')
}
const signOutSuccess = function() {
  $('#message').text(`see you later!`)
  $('form').trigger('reset')
  $('.auth').hide()
  $('.unauth').show()
}
const authFailure = function(response) {
  console.log(response)
  $('#message').text('Failure')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changeSuccess,
  signOutSuccess,
  authFailure
}
