const events = require('./events.js')

const invalidMoveMessage = function () {
  $('.game-updates').text('Invalid move!')
}

// const turnChange = function () {
//   $('.whose-turn').text(events.currentPlayer + ', GO!')
// }
//
const winnerWinner = function () {
  $('.game-updates').text(events.winner + ' wins!')
}

// const draw = function () {
//   $('.game-updates').text('DRAW!')
// }

module.exports = {
  invalidMoveMessage,
  // turnChange,
  winnerWinner
  // draw
}
