(function() {
'use_strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Controller 1, for the list of items to buy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyShoppingList = ShoppingListCheckOffService.getToBuyShoppingList()

  toBuy.setItemBought = function(itemIndex) {
    ShoppingListCheckOffService.setItemBought(itemIndex);
  }
}

// Controller 2, for the list of items already bought
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.alreadyBoughtShoppingList = ShoppingListCheckOffService.getAlreadyBoughtShoppingList();
}

// Singleton Service, responsible for manipulating both lists
function ShoppingListCheckOffService() {
  var service = this;

  // pre-populated list of items to buy
  var toBuyShoppingList = [
    {
      name: "Cans of Refried Beans",
      quantity: "2"
    },
    {
      name: "Bags of Prunes",
      quantity: "5"
    },
    {
      name: "Deep-fried Twinkies",
      quantity: "3"
    },
    {
      name: "White Castle Sliders",
      quantity: "30"
    },
    {
      name: "Rolls of Toilet Paper",
      quantity: "120"
    }
  ];

  // initialize the list to hold already bought items
  var alreadyBoughtShoppingList = [];

  // getter for items to buy
  service.getToBuyShoppingList = function() {
    return toBuyShoppingList;
  };

  // getter for items already bought
  service.getAlreadyBoughtShoppingList = function() {
    return alreadyBoughtShoppingList;
  };

  // removes the item at the specified index from the "to buy" list,
  // and adds the item to the "already bought" list.
  service.setItemBought = function(itemIndex) {
    alreadyBoughtShoppingList.push.apply(alreadyBoughtShoppingList,
      toBuyShoppingList.splice(itemIndex, 1))
  };
}

})();
