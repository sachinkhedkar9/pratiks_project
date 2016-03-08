var ShoppingApp = angular.module("AgriBusinessApp",['ngRoute']);

ShoppingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/home/",{
    templateUrl: 'views/home.html',
  }).
  when("/about/",{
    templateUrl: 'views/about.html',
  }).
  otherwise({
    redirectTo: '/home/'
  })
}]);

ShoppingApp.controller('masterController', ['$scope', '$rootScope', '$location',function($scope, $rootScope, $location){
    $rootScope.appBaserl = $location.absUrl().split('#')[0];
    $scope.baseUrl = $rootScope.appBaserl;
}]);
