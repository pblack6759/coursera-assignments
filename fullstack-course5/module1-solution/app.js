(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.lunchSelection = "";
  $scope.message = "";
  $scope.status = "";

  // function to address the heart of the assignment. Users should only be able
  // to enter 3 choices maximum to pass.
  $scope.checkLunchItems = function() {
    // make sure at least something was entered
    if ($scope.lunchSelection) {
      // bonus: changing status will update font/border color
      $scope.status = "success";

      // bonus: assignment doesn't require this but since it's optional I'll try
      // I'm applying several regular expressions to normalize the data prior to
      // splitting the String into an array:
      //
      // first, trim any whitespace around commas:
      // "apple, ,  ,banana" -> "apple,banana"
      //
      // second, replace any instances of multiple commas with no text at all:
      // "apple,,banana" -> "apple,banana"
      //
      // third, remove any leading commas:
      // ",,,,apple,banana" -> "apple,banana"
      //
      // fourth, remove any trailing commas:
      // "apple,banana,,,," -> "apple,banana"
      //
      // TODO: There should be a suitable single regex to obviate the need
      // to make 4 chained replace calls, I just really suck at these!
      var normalizedLunchSelection = $scope.lunchSelection
       .replace(/\s*,\s*/g, ",")
       .replace(/,+/g, ",")
       .replace(/^,+/g, "")
       .replace(/,+$/g, "");

      // now that the data has been normalized, split the comma delimited
      // String into an array of Strings
      var splitLunchItems = normalizedLunchSelection.split(",");
      if (splitLunchItems.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    } else {
      $scope.message = "Please enter data first...";
      $scope.status = "error";
    }
  }
}
})();
