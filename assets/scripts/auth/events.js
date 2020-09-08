'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onShowSignUp = e => {
  e.preventDefault()
  ui.showSignUp()
}
const onShowSignIn = e => {
  e.preventDefault()
  ui.showSignIn()
}
const onShowChangePass = e => {
  e.preventDefault()
  ui.showChangePass()
}
const onShowCreateProfile = e => {
  e.preventDefault()
  ui.showCreateProfiles()
}
const onSignUp = e => {
  e.preventDefault()
  let data = getFormFields(e.target)
  api.addUser(data)
    .then(ui.signUpSuccess)
    .catch(ui.authFailure)
}
const onSignIn = e => {
  e.preventDefault()
  let data = getFormFields(e.target)
  api.signUserIn(data)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}
const onChangePassword = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.userChangePass(data)
    .then(ui.changeSuccess)
    .catch(ui.authFailure)
}
const onSignOut = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
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
