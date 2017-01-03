var app = angular.module('myApp', ['ui.router']); // create module
// with name 'myApp', plus services that we want to use along with.
app.controller('MainCtrl', [ // controller part
'$scope', // var
'$state', // var
function($scope,$state){
  $scope.goToGallery = function(){ // goToGallery function
    $state.go('gallery'); // $state has 'go' property
  }
}]);
//-----------------------------------------------------
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.ejs',
      controller: 'MainCtrl'
    })
     .state('gallery', {
      url: '/gallery',
      templateUrl: 'templates/gallery.ejs'
    });

  $urlRouterProvider.otherwise('home');
}]);