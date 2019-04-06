const store = require('../store.js')

// GAME PLAY MESSAGING

const winnerWinner = function () {
  $('.game-updates').text('Game over! ' + store.winner + ' wins!')
}

const turnChange = function () {
  $('.whose-turn').text(store.currentPlayer + '\'s turn!')
}

const invalidMoveMessage = function () {
  $('.game-updates').text('Invalid move!')
}

const gameOverMessage = function () {
  $('.game-updates').text('Game Over! Click New Game to play again.')
}

const draw = function () {
  $('.game-updates').text('Game over! It\'s a draw!')
}

// GAME API STUFF

const createGameSuccess = function (response) {
  console.log('successfully created a new game: ', response)
  store.game = response.game
  $('.container').show()
  $('.game-updates').show()
  $('.whose-turn').show()
}

const createGameFail = function (response) {
  console.log('failed to create new game: ', response)
}

const updateGameSuccess = function (response) {
  console.log('successfully updated the game: ', response)
}

const updateGameFail = function (response) {
  console.log('failed to update the game: ', response)
}

const getGamesSuccess = function (response) {
  console.log('successfully got this game data: ', response)
  $('.user-stats').text(response)
}

const getGamesFail = function (response) {
  console.log('failed to get this game data: ', response)
}

module.exports = {
  invalidMoveMessage,
  gameOverMessage,
  turnChange,
  winnerWinner,
  draw,
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  getGamesSuccess,
  getGamesFail
}
