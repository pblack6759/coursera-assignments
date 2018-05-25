(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userinfo', 'ApiPath'];
function MyInfoController(userinfo, ApiPath) {
  var $ctrl = this;
  $ctrl.userinfo = userinfo;
  $ctrl.basePath = ApiPath
}

})();
