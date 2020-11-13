
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step: 'Gods eat apples'},
        { step: 'My pain is far greater than yours'},
        { step: "Dont forget oct 11"}
      ]);
    });
};
