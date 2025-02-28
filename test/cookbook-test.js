const chai = require('chai');
const expect = chai.expect;

const recipeData = require('../data/recipes');
const Cookbook = require('../src/cookbook');

let cookbook;

describe('User', () => {
  beforeEach(() => {
    cookbook = new Cookbook(recipeData);
  });

  it('Should have an array of all recipes', () => {
    expect(cookbook.recipes).to.be.an('array');
  });

  describe('findRecipe', () => {
    it('Should be able to filter through its array by ingredients', () => {
      expect(cookbook.findRecipe('yolk').length).to.equal(2);
    });

    it('Should be able to filter through its array by name', () => {
      expect(cookbook.findRecipe('Sesame Cookies').length).to.equal(1);
    });
  });
})
