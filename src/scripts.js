
const favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
let cookbook = new Cookbook(recipeData);
let user;

window.onload = onStartup();

homeButton.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', viewFavorites);
cardArea.addEventListener("click", cardButtonConditionals);

function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  populateCards(cookbook.recipes);
  greetUser();
}

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all')
  }
  if (!user.favoriteRecipes.length) {
    favButton.innerHTML = 'You have no favorites!';
    populateCards(cookbook.recipes);
    return
  } else
  favButton.innerHTML = 'Your Favorites'
  cardArea.innerHTML = '';
  user.favoriteRecipes.forEach(recipe => {
    cardArea.insertAdjacentHTML("afterbegin", `<div id='${recipe.id}' class='card'>
        <header id='${recipe.id}' class='card-header'>
          <label for='add-button' class='hidden'>Click to add recipe</label>
          <button id='${recipe.id}' class='add-button card-button'>
            <img id='${recipe.id}' class='add' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to recipes to cook'>
          </button>
          <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
          <button id='${recipe.id}' class='favorite favorite-active card-button'></button>
        </header>
          <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
          <img id='${recipe.id}' tabindex="0" class='card-picture' src="${recipe.image}" alt="Food from recipe">
    </div>`)
  });
};

function greetUser() {
  const userName = document.querySelector('.user-name');
  userName.innerHTML = user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
}

function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    favButton.innerHTML = 'View Favorites';
    user.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromFavorites(specificRecipe)
  }
}

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
   } else if (event.target.classList.contains('card-picture')) {
    displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    populateCards(cookbook.recipes);
  }
}


function displayDirections(event) {
   let newRecipeInfo = cookbook.recipes.find(recipe => {
    if (recipe.id === Number(event.target.id)) {
      return recipe;
    }
  })
  let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
  let cost = recipeObject.calculateCost()
  let costInDollars = (cost / 100).toFixed(2)
  cardArea.classList.add('all');
  cardArea.innerHTML = `<h3>${recipeObject.name}</h3>
  <p class='all-recipe-info'>
  <strong>It will cost: </strong><span class='cost recipe-info'>$${costInDollars}</span><br><br>
  <strong>You will need: </strong><span class='ingredients recipe-info'></span>
  <strong>Instructions: </strong><ol><span class='instructions recipe-info'></span></ol>
  </p>`;
  let ingredientsSpan = document.querySelector('.ingredients');
  let instructionsSpan = document.querySelector('.instructions');
  recipeObject.ingredients.forEach(ingredient => {
    ingredientsSpan.insertAdjacentHTML("afterbegin", `<ul><li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${ingredient.name}</li></ul>
    `)
  })
  recipeObject.instructions.forEach(instruction => {
    instructionsSpan.insertAdjacentHTML("beforebegin", `<li>${instruction.instruction}</li>
    `)
  })
}

function populateCards(recipes) {
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all')
  }
  recipes.forEach(recipe => {
    cardArea.insertAdjacentHTML("afterbegin", `<div id='${recipe.id}' class='card'>
        <header id='${recipe.id}' class='card-header'>
          <label for='add-button' class='hidden'>Click to add recipe</label>
          <button id='${recipe.id}' class='add-button card-button'>
            <img id='${recipe.id} favorite' class='add' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to recipes to cook'>
          </button>
          <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
          <button id='${recipe.id}' class='favorite card-button'></button>
        </header>
          <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
          <img id='${recipe.id}' tabindex="0" class='card-picture' src="${recipe.image}" alt="click to view recipe for ${recipe.name}">
    </div>`)
  });
};
