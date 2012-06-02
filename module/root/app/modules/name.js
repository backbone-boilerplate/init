define([
  // Global application context.
  "app",

  // Third-party libraries.
  "backbone"
],

function(app, Backbone) {
  var {%= name %} = app.module();

  {% if (placeholders) { %}
    {%= name %}.Model = Backbone.Model.extend({});
    {%= name %}.Collection = Backbone.Model.extend({});
  {% } %}

  return {%= name %};
});
