module.exports = function less(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-less');

    // Options
    return {
        build: {
          options: {
              paths: ["src/less"],
              cleancss: true,
              compress: true
          },
          files: {
              'build/css/app.min.css': 'src/less/app.less'
          }
        }
    };
    
};