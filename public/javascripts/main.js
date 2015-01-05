(function() {

  require.config({

    paths: {
      'jquery': ['/lib/jquery/jquery'],
      'bootstrap': ['/lib/bootstrap/js/bootstrap'],
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
