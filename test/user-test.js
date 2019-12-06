const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user.js');
const Recipe = require('../src/recipe.js');
const recipeData = require('../data/recipes.js');

let user1
let user5
let recipe1
let recipe2

describe('User', () => {
  beforeEach(() => {
    user1 = new User(1, 'Boba', [
      {
        "ingredient": 1077,
        "amount": 1
      },
      {
        "ingredient": 14412,
        "amount": 1
      },
      {
        "ingredient": 1009054,
        "amount": 3
      }]
    );
    user5 = new User(5, 'Krennick', [
      {
        "ingredient": 11477,
        "amount": 1
      },
      {
        "ingredient": 93820,
        "amount": 1
      },
      {
        "ingredient": 11297,
        "amount": 3
      },
      {
        "ingredient": 11547,
        "amount": 5
      }]
    );
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
  });

  it('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites("Loaded Chocolate Chip Pudding Cookie Cups")
    expect(user1.favoriteRecipes.includes("Loaded Chocolate Chip Pudding Cookie Cups")).to.eql(true);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
    expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });

  it.skip('Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToFavorites(recipeData[0]);
    expect(user1.findFavorites(name/ingredient)).to.eql(recipeData[0]);
  });

  it.skip('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    user1.
    expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
  });

  it.skip('Should inform User if they lack required ingredients for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
  });
});
