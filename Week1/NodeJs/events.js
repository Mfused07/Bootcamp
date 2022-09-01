// Load logger module ( Class)
// 1- Creating Logger
const Logger = require('./logger')
const logger = new Logger()

// 2- Register Listner
logger.on('messageLogged',(arg) => {
    console.log("Listner Called: Yo i'm Listening 🙌", arg)
})

logger.log('Message')
