exports.description = "BBB: Add new module";
exports.notes = "Generates a new module";

exports.template = function(grunt, init, done) {

  grunt.helper("prompt", {}, [

    // Get the name of the module.
    grunt.helper("prompt_for", "name", function(value, data, done) {
      // Flatten the module name.
      value = value.toLowerCase();

      // Set the module name to be the title case.
      data.module_name = value[0].toUpperCase() + value.slice(1);

      done(null, value);
    }),

  ], function(err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {});

    // All done!
    done();
  });

};
