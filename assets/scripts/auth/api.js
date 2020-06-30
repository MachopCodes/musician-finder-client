'use strict'

const config = require('./../config')
const store = require('./../store')

const addUser = function(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}
const signUserIn = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}
const userChangePass = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer=' + store.user.token
    },
    data
  })
}
const userSignOut = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer=' + store.user.token
    }
  })
}

module.exports = {
  addUser,
  signUserIn,
  userChangePass,
  userSignOut
}
