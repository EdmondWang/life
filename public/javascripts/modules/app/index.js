define(
  [
    'angular',
    'controllers/index'
  ],
  function (angular) {
    var oIndexModule = angular.module('indexModule', ['controller'], angular.noop);
    return oIndexModule;
  }
);