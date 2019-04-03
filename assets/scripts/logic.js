
let currentBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'

const switchPlayers = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

module.exports = {
  switchPlayers
}
