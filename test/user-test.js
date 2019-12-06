const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user.js');
const Recipe = require('../src/recipe.js');


let user1
let user5
let recipe1
let recipe2
let recipe3
let recipe4

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
    recipe1 = new Recipe("Loaded Chocolate Chip Pudding Cookie Cups",
      595736,
      "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      [
        {
          "name": "all purpose flour",
          "id": 20081,
          "quanitity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "name": "baking soda",
          "id": 18372,
          "quanitity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "name": "egg",
          "id": 1123,
          "quanitity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "name": "granulated sugar",
          "id": 19335,
          "quanitity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "instant vanilla pudding mix",
          "id": 19206,
          "quanitity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "name": "light brown sugar",
          "id": 19334,
          "quanitity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "salt",
          "id": 2047,
          "quanitity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "name": "sea salt",
          "id": 1012047,
          "quanitity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "name": "semisweet chocolate chips",
          "id": 10019903,
          "quanitity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "name": "unsalted butter",
          "id": 1145,
          "quanitity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "vanilla extract",
          "id": 2050,
          "quanitity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      [
        {
          "number": 1,
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
        },
        {
          "number": 2,
          "instruction": "Add egg and vanilla and mix until combined."
        },
        {
          "number": 3,
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees."
        },
        {
          "number": 4,
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt."
        },
        {
          "number": 5,
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown."
        },
        {
          "number": 6,
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce."
        }
      ],
      [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]);
    let recipe2 = new Recipe("Maple Dijon Apple Cider Grilled Pork Chops",
      678353,
      "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      [
        {
          "name": "apple cider",
          "id": 1009016,
          "quanitity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "name": "apples",
          "id": 9003,
          "quanitity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "name": "cornstarch",
          "id": 20027,
          "quanitity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "dijon mustard",
          "id": 1002046,
          "quanitity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "garlic",
          "id": 11215,
          "quanitity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "name": "grainy mustard",
          "id": 1012046,
          "quanitity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "maple syrup",
          "id": 19911,
          "quanitity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "name": "Miso Soybean Paste",
          "id": 16112,
          "quanitity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "pork chops",
          "id": 10010062,
          "quanitity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "name": "salt and pepper",
          "id": 1102047,
          "quanitity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "name": "soy sauce",
          "id": 16124,
          "quanitity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "sriracha",
          "id": 1016168,
          "quanitity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      [
        {
          "number": 1,
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
        }
      ],
      [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "name": "Dirty Steve's Original Wing Sauce",
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "name": "black pepper",
          "id": 1002030,
          "quanitity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "brown sugar",
          "id": 19334,
          "quanitity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "name": "butter",
          "id": 1001,
          "quanitity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "name": "canola oil",
          "id": 4582,
          "quanitity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "name": "cayenne pepper",
          "id": 2031,
          "quanitity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "chicken wings",
          "id": 5100,
          "quanitity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "name": "chili powder",
          "id": 2009,
          "quanitity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "garlic powder",
          "id": 1022020,
          "quanitity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "hot sauce",
          "id": 6168,
          "quanitity": {
            "amount": 8,
            "unit": "cups"
          }
        },
        {
          "name": "mango",
          "id": 9176,
          "quanitity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "name": "onion powder",
          "id": 2026,
          "quanitity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "seasoning salt",
          "id": 1042047,
          "quanitity": {
            "amount": 1.5,
            "unit": "tablespoons"
          }
        },
        {
          "name": "seasoning salt",
          "id": 1042047,
          "quanitity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        }
      ],
      [
        {
          "number": 1,
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined."
        }
      ],
      [
        "sauce"
      ]);
    recipe3 = new Recipe("Elvis Pancakes",
      741603,
      "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
      [
        {
          "name": "all purpose flour",
          "id": 20081,
          "quanitity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "name": "baking powder",
          "id": 18371,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "name": "bananas",
          "id": 9040,
          "quanitity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "name": "buckwheat flour",
          "id": 20011,
          "quanitity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "name": "butter",
          "id": 1001,
          "quanitity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "name": "butter",
          "id": 1001,
          "quanitity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "name": "buttermilk",
          "id": 1230,
          "quanitity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "name": "eggs",
          "id": 1123,
          "quanitity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "name": "honey",
          "id": 19296,
          "quanitity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "name": "peanut butter",
          "id": 16098,
          "quanitity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "name": "salt",
          "id": 2047,
          "quanitity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "name": "sugar",
          "id": 19335,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      [
        {
          "number": 1,
          "instruction": "Watch how to make this recipe."
        },
        {
          "number": 2,
          "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter."
        },
        {
          "number": 3,
          "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour."
        },
        {
          "number": 4,
          "instruction": "Slowly add flour into the wet ingredients mixing with a whisk."
        },
        {
          "number": 5,
          "instruction": "Mix until there are no lumps and the batter is smooth and velvety."
        },
        {
          "number": 6,
          "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients."
        },
        {
          "number": 7,
          "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey."
        }
      ],
      [
        "side dish",
        "Gluten Free"
      ]);
    recipe4 = new Recipe("Mock Udi’s Gluten Free Whole Grain Bread",
      562334,
      "https://spoonacular.com/recipeImages/562334-556x370.jpg",
      [
        {
          "name": "apple cider vinegar",
          "id": 2048,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "name": "baking powder",
          "id": 18371,
          "quanitity": {
            "amount": 0.3333333333333333,
            "unit": "teaspoon"
          }
        },
        {
          "name": "brown rice flour",
          "id": 20090,
          "quanitity": {
            "amount": 1.125,
            "unit": "cup"
          }
        },
        {
          "name": "brown rice syrup",
          "id": 93784,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "name": "cooking oil",
          "id": 4582,
          "quanitity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "name": "egg whites",
          "id": 1124,
          "quanitity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "name": "evaporated cane juice",
          "id": 93625,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "name": "flax seed meal",
          "id": 12220,
          "quanitity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "name": "instant yeast",
          "id": 10118375,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "name": "molasses",
          "id": 19304,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "name": "potato starch",
          "id": 11413,
          "quanitity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "name": "salt",
          "id": 2047,
          "quanitity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "name": "tapioca starch",
          "id": 93696,
          "quanitity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "name": "teff flour",
          "id": 93760,
          "quanitity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "name": "water",
          "id": 14412,
          "quanitity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "name": "xanthan gum",
          "id": 93626,
          "quanitity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      [
        {
          "number": 1,
          "instruction": "Grease or spray oil a 9×5 inch loaf pan.Preheat oven to 170 – 200°F (lowest possible)."
        },
        {
          "number": 2,
          "instruction": "Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds."
        },
        {
          "number": 3,
          "instruction": "Whisk together the dry ingredients; set aside."
        },
        {
          "number": 4,
          "instruction": "Add the oil, vinegar and yeast mixture to the egg whites and blend on low for a few seconds."
        },
        {
          "number": 5,
          "instruction": "Add dry ingredients all at once and mix on low speed until all dry ingredients are moistened. Then beat on high for 1 minute."
        },
        {
          "number": 6,
          "instruction": "Add dough batter to prepared pan and distribute and smooth the top using a rubber spatula. You'll want to meet all sides of the pan. If you miss the corners that will still be okay. It will fill in upon rising. To even out top, drop a few drops of filtered water on top, and spread evenly with a rubber spatula, or dip spatula in water several times."
        },
        {
          "number": 7,
          "instruction": "Place the bread pan in the oven. Turn oven off. Allow the dough to rise until the center is about 1/2” over the top of the pan, about 22 minutes. It will rise more while the oven is heating and during baking."
        },
        {
          "number": 8,
          "instruction": "Remove pan from oven and preheat oven to 375°F."
        },
        {
          "number": 9,
          "instruction": "Place the pan on the center of the rack in the center of the oven and bake for about 45 minutes or more."
        },
        {
          "number": 10,
          "instruction": "Remove the loaf from the oven and immediately remove it from the pan (careful it will be hot), and set the loaf on a cooling rack to cool. If you do not remove it right away the steam will make the crust soggy.Slice off the two ends to allow the steam to escape, or it will begin to sink in on the sides and bottom.Once cooled, it will shrink a little bit. Slice it with an electric slicer, electric knife or serrated knife. You'll get about 13-16, depending upon how thick you slice it."
        }
      ],
      [
        "Gluten Free"
      ]);
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

  it.skip('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToFavorites(recipe1);
    user1.addToFavorites(recipe2);
    user1.addToFavorites(recipe3);
    user1.addToFavorites(recipe4);
    expect(user1.filterFavorites(tag)).to.eql([recipesIncludingTags]);
  });

  it.skip('Should be able to search favoriteRecipes by name or ingredient', () => {
    expect(user1.findFavorites(name/ingredient)).to.eql(recipeWithName/recipeWithIngredient);
  });

  it.skip('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    user1.
    expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
  });

  it.skip('Should inform User if they lack required ingredients for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
  });
});
