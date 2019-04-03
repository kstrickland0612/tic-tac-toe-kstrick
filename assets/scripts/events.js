// const api = require('./api.js')
// const ui = require('./ui.js')

const newGame = function () {

}
// let currentBoard = ['', '', '', '', '', '', '', '', '']

const currentPlayer = {
  playerIcon: 'x'
}

// const switchPlayerIcon = function () {
//   if (currentPlayer.playerIcon === 'x') {
//     currentPlayer.playerIcon = 'o'
//   } else {
//     currentPlayer.playerIcon = 'x'
//   }
// }

const updateBox0 = function () {
  if ($('#box0').text() === '') {
    $('#box0').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox1 = function () {
  if ($('#box1').text() === '') {
    $('#box1').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox2 = function () {
  if ($('#box2').text() === '') {
    $('#box2').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox3 = function () {
  if ($('#box3').text() === '') {
    $('#box3').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox4 = function () {
  if ($('#box4').text() === '') {
    $('#box4').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox5 = function () {
  if ($('#box5').text() === '') {
    $('#box5').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox6 = function () {
  if ($('#box6').text() === '') {
    $('#box6').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox7 = function () {
  if ($('#box7').text() === '') {
    $('#box7').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

const updateBox8 = function () {
  if ($('#box8').text() === '') {
    $('#box8').text(currentPlayer.playerIcon)
  } else {
    console.log('space already taken')
  }
}

module.exports = {
  updateBox0,
  updateBox1,
  updateBox2,
  updateBox3,
  updateBox4,
  updateBox5,
  updateBox6,
  updateBox7,
  updateBox8,
  newGame
}
