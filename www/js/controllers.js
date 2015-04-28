angular.module('calorific.controllers', [])

.controller('homeCtrl', function($scope) {})

.controller('foodsCtrl', function($scope, foods) {
  $scope.foods = foods.all();
  $scope.remove = function(foods) {
    Chats.remove(foods);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('calcCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
