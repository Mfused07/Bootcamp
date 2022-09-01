const sum = require("./sum")

describe("product tests", () => {
    
    it("should adding 2 + 3 = 5", ()=> {
        const result = sum(2,3)
        expect(result).toBe(5)
    })
    
    it("adding floats", () => {
        const value = 0.1 + 0.2
        expect(value).toBeCloseTo(0.2999999)
    })
    // it("obj assignment", () => {
    //     const  obj = {}
    //     expect
    // })
})

describe("check Regular expressions",() => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    const shoppingList = [
        'diapers', 'kleenx', 'trash bags', 'tooth paste', 'milk'
    ]
    expect(shoppingList).toContain('milk')
})

function compileAndroidCode() {
    throw new Error("You are using the wrong JDK🤦‍♀️")
}
describe("exceptions", () => {
    it("compiling android goes as expected", () => {
        expect(()=> compileAndroidCode()).toThrow(Error)
    })
})