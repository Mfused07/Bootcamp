// async await Promises
const {readFile, writeFile} = require('fs').promises

const start  = async() => {
    try {
        const first = await readFile('./first.txt','utf-8')
        const second = await readFile('./second.txt', 'utf-8')
        await writeFile('./resultFileAsync-Await.txt', `This is Awesome: ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    }
    catch(error) {
        console.log(error)
    }

}
start()