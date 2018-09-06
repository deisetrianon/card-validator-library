const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const cardValidator = require("../index");

describe("cardValidator", () => {
  describe("For empty parameters", () => {
    it ("should throw a New Error", () => {
      expect(() => cardValidator('')).to.throw('Empty parameter.');
      expect(() => cardValidator()).to.throw('Empty parameter.');
    })
  })

  describe("For non-empty parameters", () => {
    context("When the parameter is not a number", () => {
      it ("should throw a New Error", () => {
        expect(() => cardValidator('word')).to.throw('The parameter is not a number.');
        expect(() => cardValidator('36490102462661')).to.throw('The parameter is not a number.');
        expect(() => cardValidator('1')).to.throw('The parameter is not a number.');
      })
    })

    context("When the card number is a one-digit number", () => {
      it ("should throw a New Error", () => {
        expect(() => cardValidator(1)).to.throw('The card number is a one-digit number.');
        expect(() => cardValidator(5)).to.throw('The card number is a one-digit number.');
      })
    })

    context("When its a valid card number", () => {
      it ("should return true", () => {
        expect(cardValidator(36490102462661)).to.be.true;
        expect(cardValidator(5453010000066167)).to.be.true;
        expect(cardValidator(4112344112344113)).to.be.true;
      })
    })

    context("When its an invalid card number ", () => {
      it ("should return false", () => {
        expect(cardValidator(4112344112344114)).to.be.false;
        expect(cardValidator(4725467890452674)).to.be.false;
        expect(cardValidator(1234)).to.be.false;
      })
    })
  })
})