
let cardArea = document.querySelector('.all-cards');
let favoriteButton = document.querySelector('.favorite');
let addButton = document.querySelector('.add')
let cookbook = new Cookbook(recipeData);
let user;

window.onload = onStartup();

cardArea.addEventListener("click", buttonConditionals);

function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  populateCards(cookbook.recipes);
}


function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => {
    // console.log(event.target.id);
    if (recipe.id === Number(event.target.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    console.log(specificRecipe);
    user.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromFavorites(specificRecipe)
  }
}

function buttonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
    console.log(user.favoriteRecipes);
  }
}

function populateCards(recipes) {
  recipes.forEach(recipe => {
    cardArea.insertAdjacentHTML("afterbegin", `<div class='card'>
        <header class='card-header'>
          <img class='add card-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to recipes to cook'>
          <button id='${recipe.id}' class='favorite card-button' alt='Favorite this recipe'></button>
        </header>
          <span class='recipe-name'>${recipe.name}</span>
          <img class='card-picture' src="${recipe.image}" alt="Food from recipe">
    </div>`)
  });
};
