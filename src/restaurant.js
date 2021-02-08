
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



module.exports = {
   createRestaurant, 
   addMenuItem,
  // removeMenuItem
}