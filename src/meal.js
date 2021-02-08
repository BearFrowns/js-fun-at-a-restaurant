function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem
};

function addIngredients(flavor1, flavor2){
  if (flavor2.includes(flavor1)){
    return console.log('${flavor1} is already part of this array.')
  } else {
  var moreIngredients = flavor2.push(flavor1);
  return moreIngredients;
}
};

function formatPrice(price) {
  initialPrice = `$${price}`
  return initialPrice
};

function decreasePrice(price) {
   decreasedPrice = price *.9;
  return decreasedPrice;
};

function createRecipe(title, ingredients, type) {
    var recipe = {
      title: title,
      ingredients: ingredients,
      type: type,
    };
    return recipe;
}


module.exports = {
  nameMenuItem,
   createMenuItem,
   addIngredients,
   formatPrice,
   decreasePrice,
   createRecipe
}


