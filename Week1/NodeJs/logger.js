const EventEmitter = require('events');

var url = 'http://mylogger.io/log'

// logger class will have all the capabilities of event emmiter by extend
class Logger extends EventEmitter {

    log(message) {
        // Send an HTTP req
        console.log(message)
    
    
        //Raise An event
        this.emit('messageLogged', {id: 1, url: 'http://'}) //nothing happens as we have to register a listner 
    }
}

module.exports = Logger