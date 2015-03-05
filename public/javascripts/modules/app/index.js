define(
  [
    'angular',
    'angular-route',
    'jquery',
    'controllers/news',
    'controllers/snake',
    'controllers/placeholder'
  ],
  function (angular) {
    var oIndexModule = angular.module('indexModule', ['controller', 'ngRoute'], angular.noop);
    oIndexModule.config(['$routeProvider', function($routeProvider) {
      $routeProvider.
      when('/snake', {
        templateUrl: 'partials/snake.jade',
        controller: 'snakeCtrl'
      }).
      when('/news', {
        templateUrl: 'partials/news.jade',
        controller: 'newsCtrl'
      }).
      when('/placeholder', {
        templateUrl: 'partials/placeholder.jade',
        controller: 'newsCtrl'
      }).
      otherwise({
        redirectTo: '/news'
      });
    }]);
    return oIndexModule;
  }
);