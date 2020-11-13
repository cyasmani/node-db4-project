
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipename: 'Chocolate Chip Cookies'},
        {recipename: 'Strawberry Cake'},
        {recipename: 'Cinnamon Rolls'},
        {recipename: 'apple pie'}
      ]);
    });
};
