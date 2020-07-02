'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateProfile = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  console.log("this is store.user inside events.js")
  console.log(store.user)
  console.log("this is the form data inside events.js")
  console.log(data)
  api.createProfile(data)
    .then(ui.createProfileSuccess)
    .catch(ui.profileFailure)
}
const onShowProfiles = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showProfiles(data)
    .then(ui.showProfileSuccess)
    .catch(ui.profileFailure)
}
const onClearProfiles = function(event) {
  event.preventDefault()
  ui.clearProfiles(event)
}
const onUpdateProfile = function(event) {
  event.preventDefault()
  let id = $(event.target).attr('data-id')
  const data = getFormFields(event.target)
  api.updateProfile(data, id)
    .then(ui.updateProfileSuccess)
    .catch(ui.profileFailure)
}
const onDeleteProfile = function(event) {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  api.deleteProfile(id)
    .then(console.log(id))
    .then(ui.deleteProfileSuccess)
    .catch(ui.profileFailure)
}
const onShowUpdate = function(event) {
  event.preventDefault()
  ui.showUpdate(event)
}
const addHandlers = () => {
  $('#create-profile-form').on('submit', onCreateProfile)
  $('#show-profiles-button').on('click', onShowProfiles)
  $('#clear-profiles-button').on('click', onClearProfiles)
  $('.content').on('click', '.show-update-button', onShowUpdate)
  $('.content').on('submit', '.update-profile-form', onUpdateProfile)
  $('.content').on('click', '.delete-profile-button', onDeleteProfile)
}

module.exports = { addHandlers }
