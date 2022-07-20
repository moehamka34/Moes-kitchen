const chai = require('chai');
const assert = chai.assert;
const findMax = require('../findMax');

describe("the findMax function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(findMax, "findMax exists");
        assert.isFunction(findMax, "findMax is a function");
    });
});

it("should return the correct maximum", ()=>{
    //assert.equal(findMax([1,3,2]), 3);
    assert.equal(findMax([-1,-2,-3]), -1);
})