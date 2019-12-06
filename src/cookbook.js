const recipeData = require('../data/recipes');

class Cookbook {
  constructor(data) {
    this.recipes = data;
    this.filteredRecipes = [];
  };

  findRecipe(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return (ingredient.name.includes(searchText)) || (recipe.name.includes(searchText))
      });
    });
  };

};

if (typeof module !== 'undefined') {
  module.exports = Cookbook;
};
