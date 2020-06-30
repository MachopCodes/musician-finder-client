'use strict'

const authEvents = require('./auth/events')
const profileEvents = require('./profile/events')
const reviewEvents = require('./review/events')


$(() => {
    

    $('#create-profile').on('submit', profileEvents.onCreateProfile)
    $('#show-profiles').on('click', profileEvents.onShowProfiles)
    $('#update-profile').on('submit', profileEvents.onUpdateProfile)
    $('#delete-profile').on('click', profileEvents.onDeleteProfile)

    $('#create-review').on('submit', reviewEvents.onCreateReview)
    $('#update-review').on('submit', reviewEvents.onUpdateReview)
    $('#delete-review').on('submit', reviewEvents.onDeleteReview)
})
