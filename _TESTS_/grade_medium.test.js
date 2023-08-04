const average = require('../services/grade_medium');

describe("Checking student grades", ()=>{
    test("should check if the average of the grades 7, 8 and 7 is greater than 6", ()=>{
        expect(average(7,8,7)).toBeGreaterThan(6)
    })
    test("should check if the average of the grades 6, 7 and 5 is greater than 6 or equal 6", ()=>{
        expect(average(6,7,5)).toBeGreaterThanOrEqual(6)
    })
    test("should check if the average of the grades 4, 3 and 8 is less than 6", ()=>{
        expect(average(4,3,5)).toBeLessThan(6)
    })
    test("should check if the average of the grades 6, 7 and 5 is less than 6 or equal to 6", ()=>{
        expect(average(6,7,5)).toBeGreaterThanOrEqual(6)
    })
    test("should check if the average of the grades 4, 3 and 6 is 4.33", ()=>{
        expect(average(4,3,6)).toBeCloseTo(4.33)
    }) 
    test("should check if the average of the grades 5, 5 and 6 is 4.3", ()=>{
        expect(average(5,5,6)).toBeCloseTo(5.33,1)
    })
})