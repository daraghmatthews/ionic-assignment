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
	$scope.result = 0;
		
	$scope.reset = function() {
		$scope.result = 0;
		
	};
	
	$scope.add = function(i) {
		if(!i){
		
		}else {
			$scope.result = $scope.result + parseInt(i);
			
        }
	};
	
});
