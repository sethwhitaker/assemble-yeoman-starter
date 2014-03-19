/*
 * Generated on 2014-03-15
 * generator-assemble v0.4.10
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'app',
      dist: 'www',
      bower: 'app/bower_components/'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/assets/js/*.js'
      ]
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{_content,_data,_layouts,_partials}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      // js: {
      //   files: ['bootstrap/javascripts/*.js'],
      //   tasks: ['concat', 'uglify']
      // },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'concat:dist', 'uglify']
      },
      compass: {
        files: [
          '<%= config.bower %>/bootstrap-sass/vendor/assets/stylesheets/bootstrap/{,*/}*.scss',
          '<%= config.src %>/assets/sass/{,*/}*.scss'
        ],
        tasks: ['compass:bootstrap', 'compass:dist']
      }
      // copy: {
      //   files: ['docs/assets/{*,**/}*.*','docs/examples/{*,**/}*.*'],
      //   tasks: ['copy:docs']
      // }
      // livereload: {
      //   options: {
      //     livereload: '<%= connect.options.livereload %>'
      //   },
      //   files: [
      //     '<%= config.dist %>/{,*/}*.html',
      //     '<%= config.dist %>/assets/{,*/}*.css',
      //     '<%= config.dist %>/assets/{,*/}*.js',
      //     '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      //   ]
      // }
    },

    compass: {
      options: {
        sassDir: '<%= config.src %>/assets/sass/',
        cssDir: '<%= config.dist %>/assets/css',
        imagesDir: '<%= config.dist %>/assets/images',
        javascriptsDir: '<%= config.dist %>/assets/js',
        fontsDir: '<%= config.dist %>/assets/fonts',
        httpImagesPath: '/assets/images',
        httpFontsPath: '/assets/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        outputStyle: 'nested',
        noLineComments: true
      },
      bootstrap:{
        options:{
          sassDir: '<%= config.bower %>/bootstrap-sass/vendor/assets/stylesheets/bootstrap/'
        }
      },
      dist: {
        options: {
          sassDir: '<%= config.src %>/assets/sass/'
        }
      }
    },

    concat: {
      options:{
        // stripBanners:true
      },
      dist: {
        src  : ['<%= config.src %>/assets/js/**/*.js'],
        dest : '<%= config.dist %>/assets/js/main.js',
        nonull : true
      },
      vendor: {
        files:{
          '<%= config.dist %>/assets/js/vendors/bootstrap.js' : [
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/smooth-scroll.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/vertical-center.js',
            '<%= config.bower %>/bootstrap-sass/vendor/assets/javascripts/bootstrap/toggle-list.js'
          ],
          '<%= config.dist %>/assets/js/vendors/vendors.js' : [
            '<%= config.bower %>/jquery/dist/jquery.min.js'
            // '<%= config.bower %>/backbone/backbone.js',
            // '<%= config.bower %>/underscore/underscore.js'
          ]
        }
      }
    },

    uglify: {
      options: {
        // banner: '/* <%= pkg.name %> - <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> EST */\n',
        // sequences: false
      },
      files: {
        // '<%= config.dist %>/assets/js/vendors/bootstrap.min.js':['<%= config.dist %>/assets/js/vendors/bootstrap.js'],
        // '<%= config.dist %>/assets/js/vendors/vendors.min.js' : ['<%= config.dist %>/assets/js/vendors/vendors.js']
        // '<%= config.dist %>/assets/js/vendors/vendors.min.js' : [
        //     '<%= config.bower %>/jquery/dist/jquery.min.js',
        //     '<%= config.bower %>/backbone/backbone.js',
        //     '<%= config.bower %>/underscore/underscore.js'
        //   ]
      }
    },

    // connect: {
    //   options: {
    //     port: 9000,
    //     livereload: 35729,
    //     // change this to '0.0.0.0' to access the server from outside
    //     hostname: 'localhost'
    //   },
    //   livereload: {
    //     options: {
    //       open: true,
    //       base: [
    //         '<%= config.dist %>'
    //       ]
    //     }
    //   }
    // },

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        layout: 'default.hbs',
        layoutdir: '<%= config.src %>/_layouts',
        data: '<%= config.src %>/_data/**/*.{json,yml}',
        partials: ['<%= config.src %>/_partials/**/*.hbs','<%= config.src %>/_includes/**/*.hbs' ]
      },
      pages: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/*.hbs','!_*/**'],
        dest: '<%= config.dist %>/'
      }
    },


    // Before generating any new files,
    // remove any previously-created files.
    // clean: ['<%= config.dist %>/**/*.{html,xml}']
    clean: ['<%= config.dist %>/**/*']

  });

  grunt.registerTask('server', [
    'clean',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'compass:bootstrap',
    'compass:dist',
    'concat:dist',
    'concat:vendor',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build',
    'watch'
  ]);

};
