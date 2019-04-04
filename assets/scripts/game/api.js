const config = require('../config.js')
const store = require('../store.js')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createGame
}
