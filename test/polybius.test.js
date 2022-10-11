const {polybius} = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () =>{
    it('should translate both letters i and j to 42 when encoding', ()=> {
        const input = 'iijj'
        const expected = '42424242'
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })

    it('should translate 42 to (i/j) when decoding', ()=> {
        const input = '42';
        const encode = false;
        const expected = '(i/j)';
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })

    it('should ignore capital letters', ()=> {
        const input = 'Bm';
        const expected = '2123';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })

    it('should maintain spaces in the message when encoding', ()=> {
        const input = 'b m';
        const expected = '21 23';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })

    it('should maintain spaces in the message when decoding', ()=> {
        const input = '21 23';
        const expected = 'b m'
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })

})