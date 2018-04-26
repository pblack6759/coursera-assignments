(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.lunchSelection = "";
  $scope.message = "";

  // function to address the heart of the assignment. Users should only be able
  // to enter 3 choices maximum to pass. Provide an error message in the event
  // the user enters more than 3 or in the event nothing at all is entered.
  $scope.checkLunchItems = function() {
    // if there's nothing to process, bail out
    if ($scope.lunchSelection) {
      // apply a couple regular expressions to normalize the data before
      // attempting to call the String.split() function
      //
      // first, replace any single comma followed by any amount of whitespace,
      // such as [, ,  ,   ,    ,]
      //
      // second, replace any instances of multiple commas with no whitespace
      // at all, such as [,,]
      //
      // TODO: There should be a suitable monolithic regex to obviate the need
      // to make two separate replace calls, I just can't devise one that works!
      var normalizedLunchSelection = $scope.lunchSelection
        .replace(/\s*,\s*/g, ",")
        .replace(/,+/g, ",");

      // now that the data has been normalized, convert the comma delimited
      // String into an array of Strings
      var splitLunchItems = normalizedLunchSelection.split(",");
      if (splitLunchItems.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
      console.log(splitLunchItems);
    } else {
      $scope.message = "Please enter data first...";
    }
  }
}

})();
