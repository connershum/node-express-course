// CommonJS, every file in Node is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-m-names')
const sayHi = require('./5-m-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // runs code since there is a function being called in this file

// sayHi('Conner')
// sayHi(names.john)
// sayHi(names.peter)