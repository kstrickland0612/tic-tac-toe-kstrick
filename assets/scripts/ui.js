const events = require('./events.js')

const invalidMove = function () {
  $('#game-updates').text('Invalid move, try again!')
}

const turnChange = function () {
  $('#whose-turn').text(events.currentPlayer + `'s turn!`)
}
module.exports = {
  invalidMove,
  turnChange
}
