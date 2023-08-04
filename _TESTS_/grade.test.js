const average = require('../services/grade');

describe("Checking student grades", ()=>{
    test("should return true for grades 6, 7 and 5", ()=>{
        expect(average(6,7,5)).toBeTruthy()
    })
    test("should return fase for grades 3, 5 and 4", ()=>{
        expect(average(3, 5, 4)).toBeFalsy()
    })
})