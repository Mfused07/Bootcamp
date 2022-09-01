const { expect } = require('chai')
const fetchData = require('./async')


// it("should return correct todo", async () => {
//     fetchData(1).then((todo) =>{ 
//         expect(todo.id).toBe(1)
//     })
// })




it("should return correct todo", async () => {
    const todo = await fetchData(1)
    expect(todo.id).toBe(1)
})

let animals = ['elephant', 'zebra', 'bear', 'tiger']

// // Runs once before all the tests
// beforeAll(() => {
//     console.log("BEFORE ALL")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })


// // Runs after each test
// afterEach(() => {
//     console.log("After EACH")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

// afterAll(() => {
//     console.log("After All")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']

// })
describe("animals array", () => {

    // Runs before each test
    beforeEach(() => {
        console.log("BEFORE EACH")
        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })

    it("should add animal to end of array", () => {
        animals.push("rycoon")
        expect(animals[animals.length - 1]).toBe("rycoon")
    })

    it("should add animals to beginning of array", () => {
        animals.unshift("monka")
        expect(animals[0]).toBe("monka")
    })

    it("should have initial length of 4",() => {
        expect(animals.length).toBe(4)
    })
})

describe("testing something else", () => {
    it("true should be truthy",() => {
        expect(true).toBeTruthy()
    }) 
})


const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++){
        callback(items[i])
    }
}

it("mock callback", () => {
    const mockCalledback = jest.fn(x => 42 + x)

    forEach([0,1], mockCalledback)

    expect(mockCalledback.mock.calls.length).toBe(2)

    expect(mockCalledback.mock.calls[0][0]).toBe(0)

    expect(mockCalledback.mock.calls[1][0]).toBe(1)

    expect(mockCalledback.mock.results[0].value).toBe(42)
    expect(mockCalledback.mock.results[1].value).toBe(43)
})


// it("mock return", () => {
//     const mock = jest.fn()

//     mock.mockReturnValueOnce(true)

//     const results = mock()

//     expect(results).toBe(true)
// })

