'use strict'

const config = require('./../config')
const store = require('./../store')

const createReview = function(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer=' + store.user.token
    },
    data
  })
}
const updateReview = function(data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer=' + store.user.token
    },
    data
  })
}
const deleteReview = function(data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer=' + store.user.token
    },
    data
  })
}

module.exports = {

}
