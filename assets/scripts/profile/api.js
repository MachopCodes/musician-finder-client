'use strict'

const config = require('../config')
const store = require('../store')

const createProfile = function (data) {
  return $.ajax({
    url: config.apiUrl + '/profiles',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
    data
  })
}
const showProfiles = function (data) {
  return $.ajax({
    url: config.apiUrl + '/profiles',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
    data
  })
}
const updateProfile = function (data) {
  return $.ajax({
    url: config.apiUrl + '/profiles',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
    data
  })
}
const deleteProfile = function (data) {
  return $.ajax({
    url: config.apiUrl + '/profiles',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
    data
  })
}

module.exports = {
  createProfile,
  showProfiles,
  updateProfile,
  deleteProfile
}
