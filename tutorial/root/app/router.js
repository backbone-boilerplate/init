define([
  // Application.
  "app"
],

function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      var tutorial = new Example.Views.Tutorial();

      // Attach the tutorial to the DOM
      tutorial.$el.appendTo("#main");

      // Render the tutorial.
      tutorial.render();
    }
  });

  return Router;

});
