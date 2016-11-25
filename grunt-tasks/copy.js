module.exports = function copy(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Options
    return {
        main: {
          files: [
            {expand: true, cwd: 'src/img/', src: ['**'], dest: 'build/img', filter: 'isFile'},
            {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'build/fonts', filter: 'isFile'},

            {'./index.html': './src/index.html'},
          ],
        },
    };

};
