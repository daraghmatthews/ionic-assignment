angular.module('calorific.controllers', [])

.controller('homeCtrl', function($scope) {})

.controller('foodsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
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
