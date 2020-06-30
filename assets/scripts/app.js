'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
    $('.auth').hide()
    $('#sign-in').on('submit', events.onSignIn)
    $('#sign-up').on('submit', events.onSignUp)
    $('#index-profiles').on('click', events.onIndexProfiles)
    $('#create-profile').on('click', events.onCreateProfile)
    $('#change-password').on('submit', events.onChangePassword)
    $('#sign-out').on('click', events.onSignOut)
})
