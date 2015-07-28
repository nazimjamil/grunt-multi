'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt, {
		pattern: ['grunt-*']
	});

	require('time-grunt')(grunt);

	grunt.initConfig({
		
		"pkg": grunt.file.readJSON('package.json'),

		"settings": {}

	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default',
		['shell:test']
	);

};