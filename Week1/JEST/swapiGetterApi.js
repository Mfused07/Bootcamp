const axios = require('axios')

// get a star wars person by id and  return their name

const swapiGetter = async (id) => {
   const person = await axios.get(
    `http://swapi.dev/api/people/${id}/`
    )
    console.log(person.data.name)
    return person.data.name

}

swapiGetter(1)

module.exports = swapiGetter