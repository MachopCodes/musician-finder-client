'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onCreateProfile = function(form) {
  event.preventDefault()
  let data = getFormFields(event.target)
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
const onUpdateProfile = function(form) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateProfile(data)
    .then(ui.updateProfileSuccess)
    .catch(ui.profileFailure)
}
const onDeleteProfile = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteProfile(data)
    .then(ui.deleteProfileSuccess)
    .catch(ui.profileFailure)
}

module.exports={
  onCreateProfile,
  onShowProfiles,
  onUpdateProfile,
  onDeleteProfile
}
