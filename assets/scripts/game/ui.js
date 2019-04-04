const events = require('./events.js')
const store = require('../store.js')

const winnerWinner = function () {
  console.log(events)
  $('.game-updates').text('Game over! ' + store.winner + ' wins!')
}

const turnChange = function () {
  $('.whose-turn').text(store.currentPlayer + '\'s turn!')
}

const invalidMoveMessage = function () {
  $('.game-updates').text('Invalid move!')
}

const gameOverMessage = function () {
  $('.game-updates').text('Game Over! Go play again :)')
}

const draw = function () {
  $('.game-updates').text('Game over! It\'s a DRAW!')
}

module.exports = {
  invalidMoveMessage,
  gameOverMessage,
  turnChange,
  winnerWinner,
  draw
}
