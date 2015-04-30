angular.module('calorific.controllers', [])

.controller('homeCtrl', function($scope, total) {

	/* This controller takes in the 'total' factory (a factory used to share data). calls get() function in total factory
	   and asigns this to scope.figure */
	$scope.figure = total.get();

})

	/* gets foods from foods factory for food list */
.controller('foodsCtrl', function($scope, foods) {
  $scope.foods = foods.all();
  $scope.remove = function(foods) {
    foods.remove(foods);
  }
})

	/* also gets food array elements from foods factory to display */
.controller('foodDetailCtrl', function($scope, $stateParams, $state, foods) {
  $scope.foods = foods.get($stateParams.foodsId);
  
  /* function to change the state once called. As using angular ui-router, can use state.go to change state but 
	 $state must be injected into controller above */
  $scope.send = function() {
		
	$state.go('tab.calc');
		
  }
  
})


/* total factory is used to share data between this controller and homeCtrl*/
.controller('calcCtrl', function($scope, total) { 

	$scope.result = 0;
		
	$scope.reset = function() {
		$scope.result = 0;
		total.set($scope.result);				/* this line resets the shared data that is used in home state */
		
	};
	
	$scope.add = function(i) {
		if(!i){
		
		}else {
			$scope.result = $scope.result + parseInt(i);
			total.set($scope.result);			/* also updates the shared data so home state displays correct total */
			
        }
	};
	
});
