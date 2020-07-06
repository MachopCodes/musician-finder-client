'use strict'

const store = require('../store')
const events = require('./events')
const api = require('./api')
const indexTemplate = require('../templates/index-profiles.handlebars')
const showTemplate = require('../templates/show-profiles.handlebars')

const createProfileSuccess = function(response) {
  console.log(store.user.id)
  console.log("profile created\n", response)
  const id = response.profile._id
  $('form').trigger('reset')
  api.showProfile(id)
    .then(showProfileSuccess)
    .catch(profileFailure)
}
const indexProfileSuccess = function(data) {
  const indexProfilesHtml = indexTemplate({ profiles: data.profiles})
  $('.content').html(indexProfilesHtml)
  $('#index-profiles-button').hide()
  $('#create-profile-form').hide()
  $('.update-profile-form').hide()
  $('#clear-profiles-button').show()
  $('#show-create-profiles-button').show()
}
const showProfileSuccess = function(data) {
  console.log("profile shown")
  const indexProfilesHtml = showTemplate({ profile: data.profile})
    $('.content').html(indexProfilesHtml)
    $('#index-profiles-button').hide()
    $('#create-profile-form').hide()
    $('.update-profile-form').hide()
    $('#clear-profiles-button').show()
    $('#show-create-profiles-button').show()
}
const clearProfiles = () => {
  $('.content').empty()
  $('#clear-profiles-button').hide()
  $('#index-profiles-button').show()
  $('.update-profile-form').hide()
}
const showUpdate = () => {
  $('.show-update-button').hide()
  $('.update-profile-form').show()
}
const updateProfileSuccess = function(response) {
  console.log("Profile updated, this is the response\n", response)
  // const id = store.profile.id
  $('form').trigger('reset')
  api.showProfile(store.id)
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
  indexProfileSuccess,
  clearProfiles,
  showUpdate,
  updateProfileSuccess,
  deleteProfileSuccess
}
