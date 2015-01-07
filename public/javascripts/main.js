(function() {

  require.config({

    paths: {
      'jquery': ['/lib/jquery/dist/jquery'],
      'bootstrap': ['/lib/bootstrap/dist/js/bootstrap'],
      'angular': ['/lib/angular/angular']
    },

    shim: {
      'bootstrap': {
        deps: ['jquery'],
          exports: 'bootstrap'
        },
      'angular': {
        exports: 'angular'
      }
    }

  });

  require(['jquery', 'angular', 'angular', 'bootstrap'], function($, angular, bootstrap) {
    console.log($('.container'));
  });

})(this);
