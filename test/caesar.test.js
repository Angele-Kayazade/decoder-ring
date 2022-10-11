// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", ()=>{
    it("should return false if the shift value is equal to 0", ()=>{
        const message = "cat";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })

    it("should return false if the shift value is less than -25", ()=>{
        const message  = "cat";
        const shift = -30;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })

    it("should return false if the shift value is greater than 25", ()=>{
        const message  = "cat";
        const shift = 30;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })

    it("should return false if the shift value is not present", ()=>{
        const message  = "cat";
        const shift = undefined;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })

    it("should ignore capital letters", ()=>{
        const message  = "CaT";
        const shift = 1;
        const expected = "dbu";
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    })

    it("should handle shifts that go beyond the end of the alphabet", ()=>{
        const message  = "xyz";
        const shift = 3;
        const expected = "abc";
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    })

    it("should maintain all spaces and nonalphabetic symbols", ()=>{
        const message  = "!cat!";
        const shift = 1;
        const expected = "!dbu!";
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    })
})