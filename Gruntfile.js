module.exports = function(grunt){
    // establish task configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      bower: {
        dev: {
          dest: 'public/lib',
          options: {
            expand: true,
            packageSpecific: {
              'bootstrap': {
                files: [
                  'dist/js/bootstrap.js',
                  'dist/css/bootstrap.css',
                  'dist/css/bootstrap.css.map',
                  'dist/fonts/*'
                ]
              }
            }
          }
        }
      },

      uglify: {
          options: {
              banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
              preserveComments: false // false || all || some
          },
          compressJS: { // custom sub task name
            files: [{
              expand: true,
              src: 'public/javascripts/*.js',
              dest: 'public/dist'
            }]
          }
      },

      less: {
        development: {
          files: {
            'public/stylesheets/main.css': 'public/stylesheets/main.less'
          }
        }
      },

      watch: {
        less: {
          files: ['public/stylesheets/*.less'],
          tasks: ['less'],
          options: {
            spawn: false,
          },
        },
      },

      debug: {
        options: {
          open: true // do open node-inspector in Chrome automatically
        }
      },

    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-debug-task');

    grunt.registerTask('default', ['uglify']);
};