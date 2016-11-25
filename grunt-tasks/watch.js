module.exports = function less(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Options
	return {
		watch: {
          files: [ "src/**/*.*", "./src/index.html"],
          tasks: [ 'default' ]
        }
	};
};
