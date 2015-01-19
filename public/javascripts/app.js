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
    'use strict';
    $(document).ready(function(document){
      console.log('domReady');
      angular.bootstrap(document, ['profileModule']);
    });
  }
);