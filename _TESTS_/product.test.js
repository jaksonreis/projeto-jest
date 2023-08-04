const Product = require('../services/Product');

describe("Test on product information", ()=>{
    let product = new Product();
    product.description = "cookies"
    test("should return that the stock property is undefined", ()=>{
        expect(product.stock).toBeUndefined()
    })
    test("should return that the descript is defined", ()=>{
        expect(product.description).toBeDefined()
    })
    
})