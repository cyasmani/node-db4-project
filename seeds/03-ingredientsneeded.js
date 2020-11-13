
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientsneeded').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsneeded').insert([
        {recipeID: 1, ingredientID: 1},
        {recipeID: 1, ingredientID: 1},
        {recipeID: 1, ingredientID: 1},
        {recipeID: 1, ingredientID: 1},
        {recipeID: 2, ingredientID: 3},
        {recipeID: 2, ingredientID: 4},
        {recipeID: 2, ingredientID: 5},
        {recipeID: 2, ingredientID: 1},
        {recipeID: 2, ingredientID: 1},
        {recipeID: 2, ingredientID: 2},
        {recipeID: 3, ingredientID: 4},
        {recipeID: 3, ingredientID: 8},
        {recipeID: 3, ingredientID: 7},
        {recipeID: 4, ingredientID: 1},
        {recipeID: 4, ingredientID: 1},

      ]);
    });
};
