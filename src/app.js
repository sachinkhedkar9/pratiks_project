var ShoppingApp = angular.module("AgriBusinessApp",['ngRoute']);

ShoppingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/home/",{
    templateUrl: 'src/views/home.html',
  }).
  when("/about/",{
    templateUrl: 'src/views/about.html',
  }).
  otherwise({
    redirectTo: '/home/'
  })
}]);

ShoppingApp.controller('masterController', ['$scope', '$rootScope', function($scope, $rootScope){

}]);
