define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Example = app.module();

  // This will fetch the tutorial template and render it.
  Example.Views.Tutorial = Backbone.View.extend({
    template: "example"
  });

  // Required, return the module for AMD compliance
  return Example;

});
