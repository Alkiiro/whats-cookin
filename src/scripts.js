
let cardArea = document.querySelector('.all-cards');
let favoriteButton = document.querySelector('.favorite');
let addButton = document.querySelector('.add')
let user;

window.onload = onStartup();

function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  populateCards(recipeData);
}

cardArea.addEventListener("click", buttonConditionals);

function favoriteCard(event) {
  event.target.classList.add('favorite-active');
  user.favoriteRecipes.push('hello')
  console.log(user.favoriteRecipes)
}

function buttonConditionals(event) {
  if(event.target.classList.contains('favorite')) {
    favoriteCard(event);
  }
}


function populateCards(recipes) {
  recipes.forEach(recipe => {
    cardArea.insertAdjacentHTML("afterbegin", `<div class='card'>
        <header class='card-header'>
          <img class='add card-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to recipes to cook'>
          <button class='favorite card-button' alt='Favorite this recipe'></button>
        </header>
          <span class='recipe-name'>${recipe.name}</span>
          <img class='card-picture' src="${recipe.image}" alt="Food from recipe">
    </div>`)
  });
};
