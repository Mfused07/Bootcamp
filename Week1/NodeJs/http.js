// Creating a Web Server
const http = require('http')

// This server is event Emitter()
const server  = http.createServer((req, res) => {
    console.log('request event')
    res.end("Hello Worlddd")

    if(req.url =='/'){
        res.write("Home Page")
        res.end
    }

    // BLOCKING CODE
    if(req.url =='/block'){
        for(let i =0; i< 1000; i++){
            for(let j =0; j< 1000; j++){
                console.log(`${i} ${j}`)
            
            }
        }
    }

    if(req.url =='/api'){
        res.write(JSON.stringify([1, 2, 3, 4, 5]))
        res.end()
    }
    res.end('Error Page')

})
const PORT  = 5000
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

