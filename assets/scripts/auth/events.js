'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onShowSignUp = function(event) {
  event.preventDefault()
  ui.showSignUp(event)
}
const onShowSignIn = function(event) {
  event.preventDefault(event)
  ui.showSignIn(event)
}
const onShowChangePass = function(event) {
  event.preventDefault()
  ui.showChangePass()
}
const onShowCreateProfile = function(event) {
  event.preventDefault()
  ui.showCreateProfiles()
}
const onSignUp = function(form) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.addUser(data)
    .then(ui.signUpSuccess)
    .catch(ui.authFailure)
}
const onSignIn = function(form) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signUserIn(data)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}
const onChangePassword = function(form) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userChangePass(data)
    .then(ui.changeSuccess)
    .catch(ui.authFailure)
}
const onSignOut = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userSignOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.authFailure)
}
const addHandlers = () => {
  $('#show-change-pass-button').on('click', onShowChangePass)
  $('#show-sign-in-button').on('click', onShowSignIn)
  $('#show-sign-up-button').on('click', onShowSignUp)
  $('#show-create-profiles-button').on('click', onShowCreateProfile)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {addHandlers}
