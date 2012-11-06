module.exports = function(grunt) {
  grunt.initConfig({
    info: '<json:package.json>',
    meta: {
      banner: '/*!\n'+
              ' * <%= info.name %> - <%= info.description %>\n'+
              ' * v<%= info.version %>\n'+
              ' * <%= info.homepage %>\n'+
              ' * copyright <%= info.copyright %> <%= grunt.template.today("yyyy") %>\n'+
              ' * <%= info.license %> License\n'+
              '*/'
    },
    lint: {
      all: ['lib/currie.js', 'test/*.js']
    },
    concat: {
      dist: {
        src: ['<banner>', 'lib/currie.js'],
        dest: 'dist/currie.js'
      },
    },
    min: {
      dist: {
        src: ['<banner>', 'dist/currie.js'],
        dest: 'dist/currie.min.js'
      }
    },
    simplemocha: {
      all: {
        src: 'test/**/*.test.js',
        options: {
          ui: 'tdd',
          reporter: 'list',
          growl: true
        }
      }
    },
    watch: {
      js: {
        files: '<config:lint.all>',
        tasks: 'lint concat min simplemocha' 
      }
    },
    server:{
      port: 8000,
      base: '.'
    }
  });
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.registerTask('default', 'lint concat min simplemocha');
  grunt.registerTask('dev', 'server watch');
}
