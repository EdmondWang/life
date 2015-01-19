define(
  [
    'require',
    'angular',
    'angular-route',
    'jquery',
    'app',
    'modules/profile'
  ],
  function(require, angular, angularRouter, $) {
    require(['domReady!'], function() {
      angular.bootstrap(document, ['profileModule']);
    });
  }
);