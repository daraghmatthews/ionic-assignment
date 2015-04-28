angular.module('calorific.controllers', [])

.controller('homeCtrl', function($scope) {})

.controller('foodsCtrl', function($scope, foods) {
  $scope.foods = foods.all();
  $scope.remove = function(foods) {
    foods.remove(foods);
  }
})

.controller('foodDetailCtrl', function($scope, $stateParams, foods) {
  $scope.foods = foods.get($stateParams.foodsId);
})

.controller('calcCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
