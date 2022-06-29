// const {gal, secret} = require('./name.js');
const names = require('./name.js');
const sayHi = require('./utils.js');
const data  = require('./alternative-flavor');
require('./mind-grenade')

console.log(data)
/*sayHi(gal)
sayHi(secret)*/
sayHi(names.gal)
sayHi(names.secret)

// sayHi(gal)
// sayHi(secret)
