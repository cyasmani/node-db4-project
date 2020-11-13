const db = require('./db-config');

function getRcipes() {
    return db('recipes')
};

function getShoppingList(recipeID) {
    return db('ingredients','quantity').where({recipeID})

}

function getInstructions(recipeID) {
    return db('step').where({recipeID})
}