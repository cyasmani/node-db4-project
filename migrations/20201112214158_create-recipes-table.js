
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipename')
        .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string("ingredientname")
        .notNullable()
        tbl.float("quantity")
        .nullable()  
    })
    .createTable('ingredientsneeded', tbl => {
        tbl.integer("recipeID")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        tbl.integer('ingredientID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
   
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.text('step')
        .notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps')
    .dropTableIfExists('ingredientsneeded')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  
};
