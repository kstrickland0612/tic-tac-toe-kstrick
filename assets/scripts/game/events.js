const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const engine = require('./engine.js')

// Create Game, start new game (curl then web app)
// Update Game, play the game (curl then web app)
// Get Games (curl then web app)

const newGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const addHandlers = function () {
  $('#new-game').on('click', newGame)
}

module.exports = {
  addHandlers
}
