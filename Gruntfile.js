module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/scripts/custom/custom.js'
      }
    },
    clean: ["dist/scripts","dist/styles","dist/fonts","dist/data","dist/index.html"],
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'dist/styles/vendor/skeleton.css': 'src/styles/skeleton.scss',
          'dist/styles/custom/main.css': 'src/styles/main.scss'
        }
      }
    },
    jst: {
      options: {
        amd: true
      },
      compile: {
        files: {
          'dist/scripts/templates.js': ['src/scripts/templates/*.ejs']
        }
      }
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'dist/scripts/'
        },
        files: {
          'bower_components/jquery.js': 'jquery/dist/jquery.js',
          'bower_components/require.js': 'requirejs/require.js',
          'bower_components/text.js': 'requirejs-text/text.js',
          'bower_components/underscore.js': 'underscore/underscore.js',
          'bower_components/backbone.js': 'backbone/backbone.js',
          'bower_components/lodash.js': 'lodash/dist/lodash.js',
          'bower_components/modernizr.js': 'modernizr/modernizr.js'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      },
      main: {
        expand: true,
        flatten: true,
        src: ['dist/styles/vendor/skeleton.css','dist/styles/custom/main.css'],
        dest: 'dist/styles/autoprefixed/'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/styles/<%= pkg.name %>.min.css': ['dist/styles/autoprefixed/skeleton.css', 'dist/styles/autoprefixed/main.css']
        }
      }
    },
    uglify:{
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/scripts/modernizr.min.js': ['dist/scripts/bower_components/modernizr.js']
        }
      }
    },
    requirejs: {
      production: {
        options: {
          modules: [{name: 'main'}],
          baseUrl: "src/scripts",
          mainConfigFile: "./src/scripts/main.js",
          dir: 'dist/scripts',
          optimize: 'uglify',
          useStrict: true,
          keepBuildDir: true,
          generateSourceMaps: false,
        }
      }
    },
    copy: {
      main: {
        files : [
        {expand: true, cwd: 'src/fonts/', src: ['*'], dest: 'dist/fonts/'},
        {expand: true, cwd: 'src/', src: ['index.html'], dest: 'dist/'},
        {expand: true, cwd: 'src/data/', src: ['*'], dest: 'dist/data/'}

        ]

      }

    }
  });

grunt.loadNpmTasks('grunt-bowercopy');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jst');
grunt.loadNpmTasks('grunt-contrib-requirejs');

grunt.registerTask('default', ['clean','sass','bowercopy','autoprefixer','cssmin', 'uglify' ,'jst' , 'requirejs','copy']);

};