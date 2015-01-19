(function() {

  require.config({

    paths: {
      // lib files
      'jquery': ['/lib/jquery/dist/jquery'],
      'bootstrap': ['/lib/bootstrap/dist/js/bootstrap'],
      'angular': ['/lib/angular/angular'],
      'angular-route': ['/lib/angular-route/angular-route'],
      // app files
      'app': ['/javascripts/app']
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

    deps: ['app']

  });

})(this);
