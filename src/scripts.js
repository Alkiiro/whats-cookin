let cardArea = document.querySelector('.all-cards');

window.onload = populateCards(recipeData);

function populateCards(recipes) {
  recipes.forEach(recipe => {
    cardArea.insertAdjacentHTML("afterbegin", `<div class='card'>
        <header class='card-header'>
          <img class='add card-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to recipes to cook'>
          <img class='favorite card-button' src='https://image.flaticon.com/icons/svg/149/149220.svg' alt='Favorite this recipe'>
        </header>
          <span class='recipe-name'>${recipe.name}</span>
          <img class='card-picture' src="${recipe.image}" alt="Food from recipe">
    </div>`)
  });
};
