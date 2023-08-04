const PersonFactory = require('../services/person_factory');
const { Client, Employee } = require('../services/person_employee_client');

let factory = new PersonFactory();

describe("Factory of Person", ()=>{
    
test("not passing the parameter should return null", ()=>{
    expect(factory.getPerson()).toBeNull();
})
test("passed the invalid parameter admin should return null", ()=>{
    expect(factory.getPerson("admin")).toBeNull();
})
test("passed a string with the client value, it should retrn a new client object", ()=>{
    expect(factory.getPerson("client")).toBeInstanceOf(Client)
})
test("passed a string with the employee value, it should retrn a new employee object", ()=>{
    expect(factory.getPerson("employee")).toBeInstanceOf(Employee)
})
})

