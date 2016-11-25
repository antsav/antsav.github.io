module.exports = function clean(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Options
    return {
            options: {
                force: true
            },
            all: ['build', 'index.html']
    };

};
