const Person = require('../person');

let jakson = new Person("Jakson Luiz Reis", "jakson.reis@hotmail.com", new Date(1997, 1, 21));

let jaksonTest = new Person("Jakson Luiz Reis", "jakson.reis@hotmail.com", new Date(1997, 1, 21));

let ana = new Person("Ana Moura Reis", "ana.reis@hotmail.com", new Date(1998, 12, 26));

let anaTest = new Person("Ana Moura Reis", "ana.reis@hotmail.com", new Date(1998, 12, 26));


test("should check if the object of properties jakson equal the properties of object test", ()=>{
    expect(jakson).toEqual(jaksonTest)
})

test("should check if the object of properties jakson equal the properties of object test", ()=>{
    expect(ana.email).toBe(anaTest.email)
})
