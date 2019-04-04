const store = require('../store.js')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
}

const signUpFail = function (data) {
  console.log('sign up failure ran with the data: ', data)
}

module.exports = {
  signUpSuccess,
  signUpFail
}
