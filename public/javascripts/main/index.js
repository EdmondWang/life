var sUserAgent = navigator.userAgent.toLowerCase(),
  bSafari = /webkit/.test(sUserAgent),
  bChrome = /chrome/.test(sUserAgent),
  bOpera = /opera/.test(sUserAgent),
  bMsie = /msie/.test(sUserAgent) && !/opera/.test(sUserAgent),
  bMozilla = /mozilla/.test(sUserAgent) && !/(compatible|webkit)/.test(sUserAgent);

require.config({

  paths: {
    // lib files
    'domReady': ['/lib/requirejs-domReady/domReady'],
    'jquery': ['/lib/jquery/dist/jquery'],
    'bootstrap': ['/lib/bootstrap/dist/js/bootstrap'],
    'angular': ['/lib/angular/angular'],
    'angular-route': ['/lib/angular-route/angular-route'],

  },

  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'angular-route'
    }
  },

  });

require(
  [
    'require',
    'angular',
    'angular-route',
    'jquery',
    '../modules/index'
  ],
  function(require, angular, angularRouter, $) {
    require(['domReady!'], function() {
      $.browser
      angular.bootstrap(document, ['indexModule']);
    });
  }
);

