const events = require('./events.js')
const store = require('../store.js')

const winnerWinner = function () {
  console.log(events)
  $('.game-updates').text(store.winner + ' wins!')
}

const turnChange = function () {
  $('.whose-turn').text(store.currentPlayer + ', GO!')
}

const invalidMoveMessage = function () {
  $('.game-updates').text('Invalid move!')
}

const gameOverMessage = function () {
  $('.game-updates').text('Game Over!')
}

const draw = function () {
  $('.game-updates').text('DRAW!')
}

module.exports = {
  invalidMoveMessage,
  gameOverMessage,
  turnChange,
  winnerWinner,
  draw
}
