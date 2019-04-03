// const api = require('./api.js')
// const ui = require('./ui.js')

const newGame = function () {

}

const currentBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'

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
  console.log(currentBoard)
  if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    switchPlayer()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
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
  addHandlers
}
