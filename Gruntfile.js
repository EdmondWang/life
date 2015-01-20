module.exports = function(grunt){

    var mozjpeg = require('imagemin-mozjpeg'); // require plugin for min the *.jpeg file

    // establish task configuration
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),
      ref: grunt.file.readJSON('GruntRef.json'),

      bower: {// Task
        dev: { // Target
          dest: '<%= ref.source %>' + 'lib',
          options: {
            expand: true,
            packageSpecific: {
              'bootstrap': {
                files: [
                  'dist/js/bootstrap.js',
                  'dist/js/bootstrap.min.js',
                  'dist/css/bootstrap.css',
                  'dist/css/bootstrap.css.map',
                  'dist/css/bootstrap.min.css',
                  'dist/fonts/*'
                ]
              },
              // 'semantic-ui': {
              //   keepExpandedHierarchy: true,
              //   files: [
              //     'dist/*',
              //     'dist/themes/basic/assets/fonts/*',
              //     'dist/themes/default/assets/fonts/*',
              //     'dist/themes/default/assets/images/flags.png'
              //   ]
              // },
              'jquery': {
                files: [
                  'dist/*.js',
                  'dist/*.js.map'
                ]
              },
              'angular': {
                files: [
                  '*.js',
                  '*.js.map'
                ]
              },
              'angular-route': {
                files: [
                  '*.js',
                  '*.js.map'
                ]
              }
            }
          }
        }
      },

      clean: { // Task
        initial: { // Target
          src: ['<%= ref.output %>', '<%= ref.finalize %>', '<%= ref.process %>', '<%= ref.staging %>']
        },
        finalize: { // Target
          src: ['<%= ref.finalize %>', '<%= ref.process %>', '<%= ref.staging %>']
        }
      },

      copy: { // Task
        dev: { // Target
          files: [{
            expand: true,
            src: [
              '<%= ref.source %>' + '**/*',
              '!<%= ref.source %>' + 'lib/**/*.min.*',
            ],
            dest: '<%= ref.staging %>'
          }]
        },
        pro: {// Target
          files: [{
            expand: true,
            src: [
              '<%= ref.source %>images/**/*',
              '<%= ref.source %>javascripts/**/*',
              '<%= ref.source %>stylesheets/**/*',
              '<%= ref.source %>lib/**/*.min.*',
              '<%= ref.source %>lib/**/fonts/*',
            ],
            dest: '<%= ref.staging %>'
          }]
        }
      },

      less: { // Task
        dev: { // Target
          options: {
            compress: true,
            sourceMap: true,
            sourceMapFilename: 'main.css.map'
          },
          files: {
            'public/stylesheets/main.css': 'public/stylesheets/main.less'
          }
        },
        pro: { // Target
          files: {
            '<%= ref.process %>public/stylesheets/main.css': '<%= ref.staging %>public/stylesheets/main.less'
          }
        }
      },

      jshint: { // Task
        options: {
          camelcase: true, // check names of the variables
          curly: true, // force use brace
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true, // force using "new" before "Function"
          noarg: true, // disable arguments.caller and arguments.callee
          sub: true,
          undef: true, // find all of the variables who is undeifned
          unused: true, // find all of the variables who is unused
          boss: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
          force: true,
          reporter: require('jshint-stylish'),
          // reporterOutput: 'reports/jshint.txt'
        },
        dev: ['<%= ref.source %>javascripts/**/*.js'], // Target
        pro: { // Target
          options: {
            force: true // terminate the build process when the error occurred in the jshint
          },
          files: {
            src: ['<%= ref.staging %>public/javascripts/**/*.js']
          }
        }
      },

      imagemin: { // Task
        pro: { // Target
          options: {
            optimizationLevel: 3, // 0-7, the higher the level, the more trials.
            use: [mozjpeg()]
          },
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: '<%= ref.staging %>public/images/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: '<%= ref.process %>public/images/'                  // Destination path prefix
          }]
        }
      },

      uglify: { // Task
          options: {
              banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
              preserveComments: false, // false || all || some
              compress: {
                drop_console: true // discard calls to console.* functionss
              }
          },
          pro: { // Target
            files: [{
              expand: true,
              cwd: '<%= ref.staging %>public/javascripts/', // current working directory
              src: '**/*.js',
              dest: '<%= ref.process %>public/javascripts/'
            }]
          }
      },

      watch: { // Task
        less: { // Target
          files: ['public/stylesheets/*.less'],
          tasks: ['less:dev'],
          options: {
            spawn: false,
          },
        },
      },

      debug: { // Task
        options: {
          open: true // do open node-inspector in Chrome automatically
        }
      },

  });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-debug-task');

    //define tasks order
    grunt.registerTask('default', ['clean, jshint, less, uglify']);
    grunt.registerTask('copyDev', ['clean', 'copy:dev']); // there should nerver be any space
    grunt.registerTask('copyPro', ['clean', 'copy:pro']);
    grunt.registerTask('development', ['jshint:dev', 'less:dev']);
    grunt.registerTask('production', [
      'clean:initial', 'copy:pro', 'jshint:pro',
      'less:pro', 'imagemin:pro', 'uglify:pro'
    ]);//, 'clean:finalize'

};