(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var userinfo = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  /** Performs a lookup, given a user-entered menu item short_name */
  service.lookupShortName = function (shortname) {
    if (shortname) {
      return $http.get(ApiPath + '/menu_items/' + shortname + '.json').then(function (response) {
        return response.data;
      });
    }
  };

  /** Persists the User's form information in memory for later retrieval */
  service.setUserInfo = function(userinfoInput) {
    userinfo = userinfoInput;
  };

  /** Retrieves the User's form information from memory */
  service.getUserInfo = function() {
    return userinfo;
  };

}



})();
