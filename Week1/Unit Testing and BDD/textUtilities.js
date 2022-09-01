var expect = require('chai').expect

expect(true).to.be.true
// approach Red-Green-Refactor
// 1 - write tests (they will fail obviously)
// 2 - write code to pass the tests (write fn's() )
// 3 - Improve the passing code 
// 4 - Repeat...

function titleCase(title) {
    var words = title.split(' ')
    var titleCasedWords = words.map((word)=> {
        return word[0].toUpperCase() + word.substring(1)
    })

    return titleCasedWords.join(' ')
}

// Test Expectations

expect(titleCase('the great mouse detective')).to.be.a('string')
expect(titleCase('a')).to.equal('A')
expect(titleCase('word')).to.equal('Word')

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective')
