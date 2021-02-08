
function takeOrder(orderX, deliveryOrders) {
  if (deliveryOrders.length < 3){
  deliveryOrders.push(orderX)  
  return deliveryOrders;
  }
};

function refundOrder(orderX, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length ; i++){
    if (orderX === deliveryOrders[i].orderNumber) {
      return deliveryOrders.splice(i, 1);
    }
  }
};

function listItems(deliveryOrders){
  var itemList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemList.push(deliveryOrders[i].item);   
  }
  return `${itemList[0]}, ${itemList[1]}, ${itemList[2]}`;
};

function searchOrder(deliveryOrders, item){
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
    }else{
      return false;
  }
}
};

module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}