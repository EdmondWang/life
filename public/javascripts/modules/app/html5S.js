define(
  [
    'angular',
    'controllers/html5S'
  ],
  function (angular) {
    var oHtml5SModule = angular.module('html5SModule', ['controller'], angular.noop);
    return oHtml5SModule;
  }
);