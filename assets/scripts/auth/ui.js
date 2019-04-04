const store = require('../store.js')

const signUpSuccess = function (data) {
  $('.user-message').text('Sign up success!')
  $('form').trigger('reset')
}

const signUpFail = function (data) {
  $('.user-message').text('Sign up failed, please try again.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('.user-message').text('Sign in success!')
  $('form').trigger('reset')
  store.user = data.user
}

const signInFail = function (data) {
  $('.user-message').text('Sign in failed, please try again.')
  $('form').trigger('reset')
}

const changePwSuccess = function (data) {
  $('.user-message').text('Change password success!')
  $('form').trigger('reset')
}

const changePwFail = function (data) {
  $('.user-message').text('Change password failed, please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('.user-message').text('Sign out success!')
  $('form').trigger('reset')
  store.user = null
}

const signOutFail = function (data) {
  $('.user-message').text('Sign out failed, please try again.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePwSuccess,
  changePwFail,
  signOutSuccess,
  signOutFail
}
