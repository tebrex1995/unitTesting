const NumbersValidator = require('../app/numbers_validator');
const { expect } = require('chai');

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive tests', () => {
    it('Should return true when provided an even number', () => {
      const validationResults = validator.isNumberEven(4);
      expect(validationResults).to.be.equal(true);
    });

    describe('Negative tests', () => {
      it('Should return false when provided an odd number', () => {
        const validationResults = validator.isNumberEven(5);
        expect(validationResults).to.be.equal(false);
      });
      it('Should throw error when provided not a number value', () => {
        const input = 'four';
        expect(() => {
          validator.isNumberEven(input);
        }).to.throw(
          `[${input}] is not of type "Number" it is of type "${typeof input}"`
        );
      });
    });
  });
});
