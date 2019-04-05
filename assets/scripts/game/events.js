const api = require('./api.js')
const ui = require('./ui.js')

// Create Game, start new game (curl then web app)
// Update Game, play the game (curl then web app)
// Get Games (curl then web app)

const newGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFail)
}

const addHandlers = function () {
  $('#new-game').on('click', newGame).hide()
  $('#stats').on('click', onGetGames).hide()
  $('.container').hide()
  $('.game-updates').hide()
  $('.whose-turn').hide()
}

module.exports = {
  addHandlers
}
