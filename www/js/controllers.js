angular.module('calorific.controllers', [])

.controller('homeCtrl', function($scope) {})

.controller('foodsCtrl', function($scope, foods) {
  $scope.foods = foods.all();
  $scope.remove = function(foods) {
    foods.remove(foods);
  }
})

.controller('foodDetailCtrl', function($scope, $stateParams, foods, dataService) {
  $scope.foods = foods.get($stateParams.foodsId);
  
  $scope.val;
  $scope.send = function(i) {
	$scope.val = parseInt(i);
	$scope.val = dataService.dataObj;

  
  }
})
.controller('One', function($scope, dataService) {
  $scope.data = dataService.dataObj;
})

.controller('Two', function($scope, dataService) {
  $scope.data = dataService.dataObj;
})

.controller('calcCtrl', function($scope, dataService) {
	$scope.result = 0;
	$scope.T = dataService.dataObj;
		
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
