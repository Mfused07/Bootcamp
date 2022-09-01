// part 2

// Every File is Module in Node by default
// Modules to encapsulate code (readable and reuseable)

// get names module abc

const names = require("./names")
console.log(names.john)
console.log("test")

// get util module
const sayHi = require("./utils")

// use both
sayHi(names.john)



// get alternative Flavours
const data = require("./alternative-flavour")
console.log(data.personObject.age)

// check mind-grenade
require("./mind-grenade")

console.log("check")

// const {writeFile} = require('fs').promises
// const go = async() => {
//     for (let i = 0; i< 10000; i++) {
//         await writeFile('./content/big.txt', `Hello World ${1} \n`, {flag: 'a'})
//     }
    
// }
// go()
const {createReadStream} = require('fs')
const http = require('http')
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000, encoding: 'utf-8'})

// default 64kb
//highWaterMark - control size
// stream.on('data', (result) => {
//     console.log(result)
// })

http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/first.txt', 'utf-8')
    fileStream.on('open',() => {
        fileStream.pipe()
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})




const PORT  = 5500
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

