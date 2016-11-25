module.exports = function (grunt) {
    require('time-grunt')(grunt);

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('grunt-tasks')
    });

    // App tasks
    grunt.registerTask('default', ['clean:all', 'less', 'copy', 'webpack:index']);
    grunt.registerTask('release', ['default', 'compress:zip']);

};
