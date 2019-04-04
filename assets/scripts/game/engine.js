// const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// need to hide whose-turn when game is over

// need to clear invalidMoveMessage

//  Signup and Signin must only be available to not signed in users.

//  Logout and Change password must only be available to signed in users.

const currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'
let winner = ''
let gameOver = false

const checkForWin = function (currentBoard) {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') || (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') || (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    winner = currentBoard[3]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') || (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[6]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') || (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') || (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') || (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    winner = currentBoard[1]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') || (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[2]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') || (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[2]
    gameOver = true
    store.winner = winner
    ui.winnerWinner()
  }
}

const checkForDraw = function (gameBoard) {
  if (currentBoard.every(index => index !== '')) {
    ui.draw()
    gameOver = true
  }
}

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
    checkForDraw(currentBoard)
    switchPlayer()
    ui.turnChange()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    currentBoard[boxNum] = currentPlayer
    checkForWin(currentBoard)
    checkForDraw(currentBoard)
    switchPlayer()
    ui.turnChange()
  } else {
    ui.invalidMoveMessage()
  }
}

const addHandlers = function () {
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
