'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./game/events.js')
const engine = require('./game/engine.js')
const authevents = require('./auth/authevents.js')

$(() => {
  engine.addHandlers()
  events.addHandlers()
  authevents.addHandlers()
})
