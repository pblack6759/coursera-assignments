(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.isShortNameFound = undefined;

  /** Upon form submission, attempts a lookup of the selected menu item.
   *  If a dish is returned, we persist the user info on the MenuService
   *  for later retrieval from the my-info controller.
   */
  $ctrl.submit = function () {
    var promise = MenuService.lookupShortName($ctrl.shortname);
    promise.then(function (response) {
      $ctrl.user.favorite_dish = response;
      MenuService.setUserInfo($ctrl.user);
      $ctrl.isShortNameFound = true;
    }).catch(function(error) {
      console.log("Error!", error);
      $ctrl.isShortNameFound = false;
    });
  };
}

})();
