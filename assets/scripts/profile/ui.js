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
  const showProfilesHtml = showTemplate({ profile: data.profile})
    $('.content').html(showProfilesHtml)
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
const showUpdateSuccess = (response) => {
  showProfileSuccess(response)
  $('.show-update-button').hide()
  $('.update-profile-form').show()
  $('.profile-name').val(response.profile.name)
  $('.profile-contact').val(response.profile.contact)
  $('.profile-location').val(response.profile.location)
  $('.profile-instruments').val(response.profile.instruments)
  $('.profile-blurb').val(response.profile.blurb)
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
  api.indexProfiles()
    .then(indexProfileSuccess)
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
  showUpdateSuccess,
  updateProfileSuccess,
  deleteProfileSuccess
}
