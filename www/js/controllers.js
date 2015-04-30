angular.module('calorific.controllers', [])

.controller('homeCtrl', function($scope, total) {

	$scope.figure = total.get();

})

.controller('foodsCtrl', function($scope, foods) {
  $scope.foods = foods.all();
  $scope.remove = function(foods) {
    foods.remove(foods);
  }
})

.controller('foodDetailCtrl', function($scope, $stateParams, $state, foods) {
  $scope.foods = foods.get($stateParams.foodsId);
  
  $scope.send = function(i) {
	var val = parseInt(i);
	
	$state.go('tab.calc');
	
	
  }
  
})


.controller('calcCtrl', function($scope, total) {

	$scope.result = 0;
		
	$scope.reset = function() {
		$scope.result = 0;
		
	};
	
	$scope.add = function(i) {
		if(!i){
		
		}else {
			$scope.result = $scope.result + parseInt(i);
			total.set($scope.result);
			
        }
	};
	
});
