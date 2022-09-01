const swapiGetter = require('./swapiGetterApi')
const mockAxios = require("axios")
// with jest.mock u can pretend its like an import statement, can mock folder , file , library
// jest.mock("axios")

// mockAxios.get.mockImplementation(() => {
//     Promise.resolve({ data: { name: "Mock Me Baby"} })
// })


// this test will check if we are getting the right person from API call
describe("swapiGetter", () => {
    test("should return a person Name", async () => {
        const result =  await swapiGetter(1)
        expect(result).toBe("Luke Skywalker")
        

    })
})