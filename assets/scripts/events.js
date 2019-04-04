// const api = require('./api.js')
const ui = require('./ui.js')

const newGame = function () {

}

const currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'
let winner = ''
let gameOver = false

const checkForWin = function (currentBoard) {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') || (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    $('.game-updates').text(winner + ' wins!')
  } else if ((currentBoard[3] === 'x' && currentBoard[5] === 'x' && currentBoard[5] === 'x') || (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
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
//   console.log('draw')
// }

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

const updateBox = function () {
  const content = $(event.target).text()
  const boxNum = $(event.target).data('id')
  if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    currentBoard[boxNum] = currentPlayer
    checkForWin(currentBoard)
    switchPlayer()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    currentBoard[boxNum] = currentPlayer
    checkForWin(currentBoard)
    switchPlayer()
  } else {
    ui.invalidMoveMessage()
  }
}

const addHandlers = function () {
  $('#new-game').on('click', newGame)
  $('.box').on('click', updateBox)
}

module.exports = {
  addHandlers
}
