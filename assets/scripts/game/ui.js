const store = require('../store.js')

// GAME PLAY MESSAGING

let xGamesWin = 0
let oGamesWin = 0

const winnerWinner = function () {
  $('.game-updates').text('Game over! ' + store.winner + ' wins!')
  $('.whose-turn').hide()
  if (store.winner === 'x') {
    xGamesWin++
  }
  if (store.winner === 'o') {
    oGamesWin++
  }
}

const turnChange = function () {
  $('.whose-turn').text(store.currentPlayer + '\'s turn!')
}

const invalidMoveMessage = function () {
  $('.game-updates').text('Invalid move!')
}

const gameOverMessage = function () {
  $('.game-updates').text('Game over! Click New Game to play again.')
  $('whose-turn').hide()
}

const draw = function () {
  $('.game-updates').text('Game over! It\'s a draw!')
  $('whose-turn').hide()
}

// GAME API STUFF

const createGameSuccess = function (response) {
  console.log('successfully created a new game: ', response)
  store.game = response.game
  $('.container').show()
  $('.whose-turn').text('x\'s turn!').show()
  $('.user-message').text('')
  $('.game-updates').text('')
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

  let gamesPlayed = 0

  response.games.forEach((game) => {
    gamesPlayed++
  })

  $('.user-stats').html(`<p>Games played (all-time): ${gamesPlayed}</p><p>x Wins (this session): ${xGamesWin}</p><p>o Wins (this session): ${oGamesWin}</p>`)
}

const getGamesFail = function (response) {
  console.log('failed to get this game data: ', response)
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
