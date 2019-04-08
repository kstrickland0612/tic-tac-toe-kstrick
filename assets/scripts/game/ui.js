const store = require('../store.js')

// GAME PLAY MESSAGING

store.xGamesWin = 0
store.oGamesWin = 0

const winnerWinner = function () {
  $('.game-updates').text('Game over! ' + store.winner + ' wins! 🥳')
  $('.whose-turn').hide()
  if (store.winner === 'x') {
    store.xGamesWin++
  }
  if (store.winner === 'o') {
    store.oGamesWin++
  }
}

const invalidMoveMessage = function () {
  $('.game-updates').html('Invalid move! ')
}

const turnChange = function () {
  $('.whose-turn').text(`${store.currentPlayer}'s turn!`)
}

const gameOverMessage = function () {
  $('.game-updates').text('Game over! Click New Game to play again.')
  $('.whose-turn').hide()
}

const draw = function () {
  $('.game-updates').text('Game over! It\'s a draw!')
  $('.whose-turn').hide()
}

// GAME API STUFF

const createGameSuccess = function (response) {
  store.game = response.game
  $('.container').show()
  $('.whose-turn').text('x\'s turn!').show()
  $('.user-message').text('')
  $('.game-updates').text('').show()
}

const createGameFail = function (response) {
  $('.user-message').text('Sorry, could not create new game.')
}

const updateGameSuccess = function (response) {
  // nothing needed here
}

const updateGameFail = function (response) {
  $('.user-message').text('Sorry, could not update the game')
}

const getGamesSuccess = function (response) {
  $('.user-message').text('')
  let gamesPlayed = 0

  response.games.forEach((game) => {
    gamesPlayed++
  })

  $('.user-stats').html(`<p>Games played (all-time): ${gamesPlayed}</p><p>x Wins (this session): ${store.xGamesWin}</p><p>o Wins (this session): ${store.oGamesWin}</p>`)
}

const getGamesFail = function (response) {
  $('.user-stats').text('Sorry, unable to retrieve data.')
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
