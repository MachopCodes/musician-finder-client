'use strict'

const store = require('../store')
const events = require('./events')
const api = require('./api')
const showProfilesTemplate = require('../templates/profile-listing.handlebars')

const createProfileSuccess = function(response) {
  console.log("profile created\n", response)
  $('form').trigger('reset')
  api.showProfiles()
    .then(showProfileSuccess)
    .catch(profileFailure)
}
const showProfileSuccess = function(data) {
  console.log("this is the data in ui\n", data)
  const showProfilesHtml = showProfilesTemplate({ profiles: data.profiles})
  $('.content').html(showProfilesHtml)
  $('#clear-profiles-button').show()
  $('#show-profiles-button').hide()
  $('.update-profile-form').hide()
  $('#create-profile-form').hide()
  $('#show-create-profiles-button').show()
}
const clearProfiles = () => {
  $('.content').empty()
  $('#clear-profiles-button').hide()
  $('#show-profiles-button').show()
  $('.update-profile-form').hide()
}
const showUpdate = () => {
  $('.show-update-button').hide()
  $('.update-profile-form').show()
}
const updateProfileSuccess = function(response) {
console.log("profile updated")
$('form').trigger('reset')
api.showProfiles()
  .then(showProfileSuccess)
  .catch(profileFailure)
}
const deleteProfileSuccess = function(response) {
  console.log("profile deleted\n", response)
  api.showProfiles()
    .then(showProfileSuccess)
    .catch(profileFailure)
}
const profileFailure = function(response) {
  console.log(response)
  $('#message').text('Failure')
  $('form').trigger('reset')
}

module.exports = {
  createProfileSuccess,
  showProfileSuccess,
  clearProfiles,
  showUpdate,
  updateProfileSuccess,
  deleteProfileSuccess
}
