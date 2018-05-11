(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";

  list.narrowItDown = function() {

    if (list.searchTerm.length > 0) {
      var promise = MenuSearchService.matchMenuItems(list.searchTerm);
      promise.then(function(response) {
        list.found = response;
      });
    } else {
      list.found = [];
    }
  };

  list.onRemove = function(index) {
    MenuSearchService.removeItem(index);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var menuSearchService = this;
  var found = [];

  menuSearchService.matchMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      found.length = 0; // clear out the previous results from the list
      // process result and only keep items that match the search term
      for (var i = 0; i < response.data.menu_items.length; i++) {
        var menuItem =  response.data.menu_items[i];
        if (menuItem.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
           found.push(menuItem);
        }
      }
      return found;
    });
  }

  menuSearchService.removeItem = function(index) {
    found.splice(index, 1);
  };
}

})();
