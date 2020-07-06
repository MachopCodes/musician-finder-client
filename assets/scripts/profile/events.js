'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateProfile = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  console.log(store.user, data)
  api.createProfile(data)
    .then(ui.createProfileSuccess)
    .catch(ui.profileFailure)
}
const onShowProfile = function(event) {
  event.preventDefault()
  let id = $(event.target).attr('data-id')
  api.showProfile(id)
    .then(ui.showProfileSuccess)
    .catch(ui.profileFailure)
}
const onIndexProfiles = function(event) {
  event.preventDefault()
  api.indexProfiles()
    .then(ui.indexProfileSuccess)
    .catch(ui.profileFailure)
}
const onClearProfiles = function(event) {
  event.preventDefault()
  ui.clearProfiles(event)
}
const onUpdateProfile = function(event) {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  store.id = id
  const data = getFormFields(event.target)
  api.updateProfile(data, id)
    .then(ui.updateProfileSuccess)
    .catch(ui.profileFailure)
}
const onDeleteProfile = function(event) {
  event.preventDefault()
  console.log("this is event target in event \n", event.target)
  const id = $(event.target).attr('data-id')
  api.deleteProfile(id)
    .then(ui.deleteProfileSuccess)
    .catch(ui.profileFailure)
}
const onShowUpdate = function(event) {
  event.preventDefault()
  let id = $(event.target).attr('data-id')
  api.showProfile(id)
    .then(ui.showUpdateSuccess)
    .catch(ui.profileFailure)
}
const addHandlers = () => {
  $('#create-profile-form').on('submit', onCreateProfile)
  $('#index-profiles-button').on('click', onIndexProfiles)
  $('#clear-profiles-button').on('click', onClearProfiles)
  $('.content').on('click', '.show-update-button', onShowUpdate)
  $('.content').on('submit', '.update-profile-form', onUpdateProfile)
  $('.content').on('click', '.delete-profile-button', onDeleteProfile)
}

module.exports = { addHandlers }
