
function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: menus = {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant;
};

function addMenuItem(restaurant, item) {
  if (item.type === "breakfast" && !restaurant.menus.breakfast.includes(item)){
    restaurant.menus.breakfast.push(item);
  } else if (item.type === "lunch" && !restaurant.menus.breakfast.includes(item)){
    restaurant.menus.lunch.push(item); 
  } else if (item.type === "dinner" && !restaurant.menus.breakfast.includes(item)){
    restaurant.menus.dinner.push(item);
  } else {
  };
  };

  function removeMenuItem(restaurant, foodItem, menu) {
    for (var i = 0; i < menu.length; i++) {
      if (restaurant.menus[menu][i].name === foodItem) {
    restaurant.menus[menu].splice(i);
    return `No one is eating our ${foodItem} - it has been removed from the ${menu} menu!`
    } else {
      return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`
    }
  }
  };
//js. line 27; if I remove [i], final test passes, but fails two prior. With [i] in place, restaurant.menus path becomes undefined.

module.exports = {
   createRestaurant, 
   addMenuItem,
   removeMenuItem
}