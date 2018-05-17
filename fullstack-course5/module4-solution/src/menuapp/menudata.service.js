(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    // return categories;
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    // return items.menu_items;
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: { category: categoryShortName }
    }).then(function (response) {
      return response.data.menu_items;
    });
  };

  /* SAMPLE DATA FROM THE SERVER */
  // List of categories returned from the service
  var categories = [];
  categories.push(
  {
    "id": 81,
    "short_name": "L",
    "name": "Lunch",
    "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
    "url": "https://davids-restaurant.herokuapp.com/categories/81.json"
  });
  categories.push(
  {
    "id": 82,
    "short_name": "A",
    "name": "Soup",
    "special_instructions": "",
    "url": "https://davids-restaurant.herokuapp.com/categories/82.json"
  });
  categories.push(
  {
    "id": 83,
    "short_name": "B",
    "name": "Appetizers",
    "special_instructions": "",
    "url": "https://davids-restaurant.herokuapp.com/categories/83.json"
  });

  var items = {};
  items.menu_items = [
    {
      "id": 1069,
      "short_name": "L1",
      "name": "Orange Chicken",
      "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
      "price_small": null,
      "price_large": 9.75,
      "small_portion_name": null,
      "large_portion_name": null
    },
    {
      "id": 1070,
      "short_name": "L2",
      "name": "General Tso's Chicken",
      "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
      "price_small": null,
      "price_large": 9.75,
      "small_portion_name": null,
      "large_portion_name": null
    },
    {
      "id": 1071,
      "short_name": "L3",
      "name": "Chicken Cashewnuts",
      "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
      "price_small": null,
      "price_large": 9.75,
      "small_portion_name": null,
      "large_portion_name": null
    }
  ];
}
})();
