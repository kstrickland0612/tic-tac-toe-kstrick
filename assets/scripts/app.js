'use strict'
const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#new-game').on('click', events.newGame)
  $('#box0').on('click', events.updateBox0)
  $('#box1').on('click', events.updateBox1)
  $('#box2').on('click', events.updateBox2)
  $('#box3').on('click', events.updateBox3)
  $('#box4').on('click', events.updateBox4)
  $('#box5').on('click', events.updateBox5)
  $('#box6').on('click', events.updateBox6)
  $('#box7').on('click', events.updateBox7)
  $('#box8').on('click', events.updateBox8)
})

// eventually I should combine all click handlers for boxes into one,
// probably using a for loop like this:
//   for (let i = 0; i < 9; i++) {
//     $('#box' + i).on('click', events.updateBox(i))
// }
