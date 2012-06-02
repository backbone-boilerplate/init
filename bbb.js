exports.description = "Backbone Boilerplate framework";
exports.notes = "This tool will help you install, configure, build, and "
  + "maintain your Backbone Boilerplate project.";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = "*";

exports.template = function(grunt, init, done) {

  // Files to copy (and process).
  var files = init.filesToCopy({});

  // Actually copy (and process). files.
  init.copyAndProcess(files, {}, {
    noProcess: [ "assets/**", "test/**", "favicon.ico" ]
  });

  // All done!
  done();

};
