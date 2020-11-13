
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredientname: 'butter', quantity:"1 cup"},
        {ingredientname: 'sugar', quantity:"1 teaspoon"},
        {ingredientname: 'brown sugar', quantity:"1 teaspoon"},
        {ingredientname: 'egg', quantity:"1 "},
        {ingredientname: 'baking soda', quantity:"1 tablespoon"},
        {ingredientname: 'vanilla extract', quantity:"1 teaspoon"},
        {ingredientname: 'salt', quantity:"1 teaspoon"},
        {ingredientname: 'flour', quantity:"1 cup"},
        {ingredientname: 'chocolate chips', quantity:"1 cup"},
        {ingredientname: 'cinnamon powder', quantity:"1 tablespoon"},
        {ingredientname: 'milk', quantity:"1 cup"},
        {ingredientname: 'strawberries', quantity:"1 cup"},
        {ingredientname: 'frosting', quantity:"1 cup"},
      ]);
    });
};
