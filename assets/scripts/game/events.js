// const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const newGame = {

}

const currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'
let winner = ''
let gameOver = false

const checkForWin = function (currentBoard) {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') || (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    winner = currentBoard[0]
    store.winner = winner
    gameOver = true
    ui.winnerWinner()
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') || (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    winner = currentBoard[3]
    gameOver = true
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') || (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[6]
    gameOver = true
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') || (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') || (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') || (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    winner = currentBoard[1]
    gameOver = true
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') || (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[2]
    gameOver = true
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') || (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[2]
    gameOver = true
  }
  // } else if (currentBoard.every(id => {
  //   if (id !== '') {
  //     gameOver = true
  //   }
  // })
  // ) {
  //   console.log('its a draw')
  // }
  console.log(winner)
  console.log(gameOver)
  console.log(currentBoard)
}

// const checkForDraw = function (currentBoard) {
//   currentBoard.every(id => {
//     if (id !== '') {
//       gameOver = true
//     }
//   })
//   console.log('its a draw')
// }

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    store.currentPlayer = currentPlayer
  } else {
    currentPlayer = 'x'
    store.currentPlayer = currentPlayer
  }
}

const updateBox = function () {
  const content = $(event.target).text()
  const boxNum = $(event.target).data('id')
  if (gameOver === true) {
    ui.gameOverMessage()
  } else if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    currentBoard[boxNum] = currentPlayer
    checkForWin(currentBoard)
    switchPlayer()
    ui.turnChange()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    currentBoard[boxNum] = currentPlayer
    checkForWin(currentBoard)
    switchPlayer()
    ui.turnChange()
  } else {
    ui.invalidMoveMessage()
  }
}

const addHandlers = function () {
  $('#new-game').on('click', newGame)
  $('.box').on('click', updateBox)
}

const whoWon = function () {
  return winner
}

const whoIsCurrentPlayer = function () {
  return currentPlayer
}

module.exports = {
  addHandlers,
  whoWon,
  whoIsCurrentPlayer
}
