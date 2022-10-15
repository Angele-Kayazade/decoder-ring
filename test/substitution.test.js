const { substitution } = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution', () => {
    it('should return false if the alphabet given is not exactly 26 characters long', () => {
        const input = 'message';
        const alphabet = 'qwertyuiopasdfghjklzxcvbnmt';
        const actual = substitution(input, alphabet);

        expect(actual).to.be.false;
    })

    it('should correctly translate the given phrase, based on the alphabet given to the function (encoding)', () => {
        const input = 'thinkful';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        const expected = 'jrufscpw';
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })

    it('should correctly translate the given phrase, based on the alphabet given to the function (decoding)', () => {
        const input = 'jrufscpw';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        const expected = 'thinkful';
        const actual = substitution(input, alphabet, false);

        expect(actual).to.equal(expected);
    })

    it('should return false if there are any duplicate characters in the given alphabet', () => {
        const input = 'thinkful';
        const alphabet = 'xoxqmcgrukswaflnthdjpzibev'
        const actual = substitution(input, alphabet);

        expect(actual).to.be.false;
    })

    it('spaces in the message, before and after encoding', () => {
        const input = ' think ful ';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        const expected = ' jrufs cpw ';
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })

    it('spaces in the message, before and after decoding', () => {
        const input = ' jrufs cpw ';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        const expected = ' think ful ';
        const actual = substitution(input, alphabet, false);

        expect(actual).to.equal(expected);
    })

    it('should ignore capital letters', () => {
        const input = 'Thinkful';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        const expected = 'jrufscpw';
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })
})