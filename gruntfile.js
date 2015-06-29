module.exports = function (grunt) {
    grunt.initConfig({

	    // define source files and their destinations
	    uglify: {
	    	all: {
		        files: [{ 
		            src: 'CognismApp.ver2.0/**/*.js',  // source files mask
		            dest: 'Production/',    // destination folder
		            expand: true,    // allow dynamic building
		            flatten: false//,   // remove all unnecessary nesting
		            //ext: '.min.js'   // replace .js to .min.js
		        }]
		    }
	    }
	    //,
	    //watch: {
	    //    js:  { files: 'CognismApp.ver2.0/**/*.js', tasks: [ 'uglify' ] },
	    //}
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// register at least this one task
	grunt.registerTask('default', [ 'uglify' ]);


};