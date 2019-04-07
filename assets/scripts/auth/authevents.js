const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onNeedToSignUp = function (event) {
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onNeedToSignIn = function (event) {
  $('#sign-in').hide()
  $('#sign-up').show()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut).hide()
  $('.change-password-button').hide()
  $('#sign-in').hide()
  $('.sign-in-link').on('click', onNeedToSignUp)
  $('.sign-up-link').on('click', onNeedToSignIn)
}

module.exports = {
  addHandlers
}
