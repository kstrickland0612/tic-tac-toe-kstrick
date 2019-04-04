const store = require('../store.js')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFail = function (data) {
  console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
  $('form').trigger('reset')
  store.user = data.user
}

const signInFail = function (data) {
  console.log('sign in failure ran with the data: ', data)
  $('form').trigger('reset')
}

const changePwSuccess = function (data) {
  console.log('change pw success ran with the data: ', data)
  $('form').trigger('reset')
}

const changePwFail = function (data) {
  console.log('change pw failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  console.log('sign out success')
  $('form').trigger('reset')
  store.user = null
}

const signOutFail = function (data) {
  console.log('sign out failed')
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
