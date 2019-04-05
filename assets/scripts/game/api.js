const config = require('../config.js')
const store = require('../store.js')
const engine = require('./engine.js')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.winner,
          'value': store.currentPlayer
        },
        'over': false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
