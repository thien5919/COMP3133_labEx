const { expect } = require('chai');
const {add, mul, sub, div } = require('../app/calculator');

describe('Calculator Tests', () => {
    //Add test
    describe("add()", () => {
        it('should return 7 when adding 5 and 2 (PASS)', () => {
            expect(add(5, 2)).to.equal(7);
        });

        it('should return 8 when adding 5 and 2 (FAIL)', () => {
            expect(add(5, 2)).to.equal(8);
        });
    });

    //Multiply test
    describe("mul()", () => {
        it('should return 10 when multiplying 5 and 2 (PASS)', () => {
            expect(mul(5, 2)).to.equal(10);
        });

        it('should return 5 when multiplying 5 and 2 (FAIL)', () => {
            expect(mul(5, 2)).to.equal(5);
        });
    })

    //Divide test
    describe("div()", () => {
        it('should return 5 when dividing 10 by 2 (PASS)', () => {
            expect(div(10, 2)).to.equal(5);
        });

        it('should return 2 when dividing 10 by 2 (FAIL)', () => {
            expect(div(10, 2)).to.equal(2);
        });
    });

    //Subtract test
    describe("sub()", () => {
        it('should return 3 when subtracting 2 from 5 (PASS)', () => {
            expect(sub(5, 2)).to.equal(3);
        });

        it('should return 5 when subtracting 2 from 5 (FAIL)', () => {
            expect(sub(5, 2)).to.equal(5);
        });
    });
});

