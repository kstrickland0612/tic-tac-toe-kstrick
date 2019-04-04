// const api = require('./api.js')
// const ui = require('./ui.js')

const newGame = function () {

}
let winner = ''
const currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const checkForWin = function (currentBoard) {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') || (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    winner = currentBoard[0]
  } else if ((currentBoard[3] === 'x' && currentBoard[5] === 'x' && currentBoard[5] === 'x') || (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    winner = currentBoard[3]
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') || (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[6]
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') || (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[0]
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') || (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[0]
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') || (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    winner = currentBoard[1]
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') || (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[2]
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') || (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[2]
  }
  console.log(winner)
}

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  return currentPlayer
}

const updateBox = function () {
  const content = $(event.target).text()
  const boxNum = $(event.target).data('id')
  currentBoard[boxNum] = currentPlayer
  if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    console.log(currentBoard)
    checkForWin(currentBoard)
    switchPlayer()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    console.log(currentBoard)
    checkForWin(currentBoard)
    switchPlayer()
  } else {
    console.log('that spot is already taken')
  }
}

const addHandlers = function () {
  $('#new-game').on('click', newGame)
  $('.box').on('click', updateBox)
}

module.exports = {
  addHandlers,
  checkForWin
}
