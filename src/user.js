class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];

  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(strgToSrch) {
    console.log(strgToSrch)
     return this.favoriteRecipes.filter(recipe => {
       console.log(recipe.name);
       return recipe.name.includes(strgToSrch);
      || recipe.ingredients..includes(strgToSrch);
    });
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
