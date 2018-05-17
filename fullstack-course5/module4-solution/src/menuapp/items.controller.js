(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

// ItemDetailController.$inject = ['MenuDataService', '$stateParams'];
// function ItemDetailController(MenuDataService, $stateParams) {
//   var itemDetail = this;
  // var promise = MenuDataService.getItemsForCategory($stateParams.short_name);
  // promise.then(function (response) {
  //   itemDetail.items = response;
  // });
// }

ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
