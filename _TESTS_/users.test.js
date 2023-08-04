const users = require('../services/users');

describe("Checking length of items of array", ()=>{
    test("should check if array has 3 items", ()=>{
        expect(users).toHaveLength(3)
    })
    test("should check if last items is 4 characters", ()=>{
        expect(users[2]).toHaveLength(4)
    })
})