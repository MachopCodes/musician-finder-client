'use strict'
const authEvents = require('./auth/events')
const profileEvents = require('./profile/events')
const reviewEvents = require('./review/events')

$(() => {
  $('.sign-in-forms').hide()
  $('.auth').hide()
  authEvents.addHandlers()
  profileEvents.addHandlers()
  reviewEvents.addHandlers()
})
