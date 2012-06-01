exports.description = "Backbone Boilerplate";
exports.notes = "Generates the TodoMVC application using " +
  "Backbone.LayoutManager";

exports.template = function(grunt, init, done) {

  // Grunt utilities.
  var task = grunt.task;
  var file = grunt.file;
  var utils = grunt.utils;
  var log = grunt.log;
  var verbose = grunt.verbose;
  var fail = grunt.fail;
  var option = grunt.option;
  var config = grunt.config;
  var template = grunt.template;
  var _ = grunt.utils._;

  // Files to copy (and process).
  var files = init.filesToCopy({});

  // Actually copy (and process). files.
  init.copyAndProcess(files, {}, {
    noProcess: [ "assets/**", "test/**", "favicon.ico" ]
  });

  // All done!
  done();

};
