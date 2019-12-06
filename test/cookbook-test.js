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

  it('Should be able to filter through its array with search terms', () => {
    let searched = cookbook.findRecipe("yolk")
    console.log(searched);
    expect(searched.length).to.equal(2);
  });
});
