'use strict'

const store = require('../store')
const events = require('./events')
const api = require('./api')

const showSignUp = function() {
  $('#show-sign-up-button').hide()
  $('#sign-up-form').show()
}
const showSignIn = function() {
  $('#show-sign-in-button').hide()
  $('#sign-in-form').show()
}
const showChangePass = function() {
  $('#show-change-pass-button').hide()
  $('#change-password-form').show()

}
const showCreateProfiles = function() {
  $('#show-create-profiles-button').hide()
  $('#create-profile-form').show()
}
const signUpSuccess = function(response) {
  console.log('Signed up successfully ' + response.user.email)
  $('form').trigger('reset')
}
const signInSuccess = function(response) {
  console.log(response)
  store.user = response.user
  $('form').trigger('reset')
  $('#display-show-profiles-button').show()
  $('.auth').show()
  $('.unauth').hide()
  $('#show-sign-up-button').hide()
  $('#clear-profiles-button').hide()
  $('#change-password-form').hide()
  $('#create-profile-form').hide()
}
const changeSuccess = function() {
  $('#message').text('password changed!')
  $('form').trigger('reset')
}
const signOutSuccess = function() {
  $('form').trigger('reset')
  $('.auth').hide()
  $('.unauth-show').show()
}
const authFailure = function(response) {
  console.log(response)
  console.log('failed attempt')
  $('form').trigger('reset')
}

module.exports = {
  showSignUp,
  showSignIn,
  showChangePass,
  showCreateProfiles,
  signUpSuccess,
  signInSuccess,
  changeSuccess,
  signOutSuccess,
  authFailure
}
