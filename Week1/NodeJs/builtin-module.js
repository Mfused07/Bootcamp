// Os module...
const os = require('os')

// info bout curr user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} Seconds`)

// Path Module...............
const path = require('path')

console.log(path.sep)

const filePath = path.join('/a/', 'b', 'c.txt')
console.log(filePath)

// FileSystem Module..............

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./first.txt', 'utf8')
const second = readFileSync('./second.txt','utf8')

console.log(first, second)

writeFileSync(
    './result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}//append instead of override
)
const resultFile = readFileSync('./result-sync.txt','utf8')
console.log(resultFile)

// Synchronous methods(using Callbacks)
const {readFile, writeFile} = require('fs')

readFile('./first.txt','utf8',(err, result) =>{
    if(err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile(
            './result-async.txt',
            `Here is the result : ${first}, ${second}`,(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
        })
    })
})

