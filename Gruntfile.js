module.exports = function(grunt){
    // establish task configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      uglify: {
          options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
              src: 'public/javascripts/main.js',
              dest: 'build/main.js'
          }
      },

      debug: {
        options: {
          open: true // do open node-inspector in Chrome automatically
        }
      },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-debug-task');

    grunt.registerTask('default', ['uglify']);
};