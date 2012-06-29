define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var {%= module_name %} = app.module();

  // Default model.
  {%= module_name %}.Model = Backbone.Model.extend({
  
  });

  // Default collection.
  {%= module_name %}.Collection = Backbone.Collection.extend({
    model: {%= module_name %}.Model
  });

  // Return the module for AMD compliance.
  return {%= module_name %};

});
