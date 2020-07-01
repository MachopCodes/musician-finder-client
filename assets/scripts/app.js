'use strict'
const authEvents = require('./auth/events')
const profileEvents = require('./profile/events')
const reviewEvents = require('./review/events')

$(() => {
  authEvents.addHandlers()
  profileEvents.addHandlers()
  reviewEvents.addHandlers()
})
