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
const updateProfile = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/profiles/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
    data
  })
}
const deleteProfile = function (id) {
  return $.ajax({
    url: config.apiUrl + '/profiles/' + id,
    method: 'DELETE',
    headers: {Authorization: 'Bearer ' + store.user.token},
  })
}

module.exports = {
  createProfile,
  showProfiles,
  updateProfile,
  deleteProfile
}
