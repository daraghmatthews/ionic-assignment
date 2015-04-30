/* angular.module is a global place for creating, registering and retrieving Angular modules
   'calorific' is the name of this angular module example (also set in a <body> attribute in index.html)
   the 2nd parameter is an array of 'requires'
   'calorific.services' is found in services.js
  'calorific.controllers' is found in controllers.js
  */
  
angular.module('calorific', ['ionic', 'calorific.controllers', 'calorific.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  /* Ionic uses AngularUI Router which uses 'states'
     Set up the various states which the app can be in. These are contained below.
     Each state's controller can be found in controllers.js
  */
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tab.foods', {
      url: '/foods',
      views: {
        'tab-foods': {
          templateUrl: 'templates/tab-foods.html',
          controller: 'foodsCtrl'
        }
      }
    })
    .state('tab.food-detail', {
      url: '/foods/:foodsId',
      views: {
        'tab-foods': {
          templateUrl: 'templates/food-detail.html',
          controller: 'foodDetailCtrl'
        }
      }
    })

  .state('tab.calc', {
    url: '/calc',
    views: {
      'tab-calc': {
        templateUrl: 'templates/tab-calc.html',
        controller: 'calcCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
