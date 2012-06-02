require([
  "namespace",

  // Libs
  "jquery",
  "backbone",

  // Modules
  "modules/todo"
],

function(namespace, $, Backbone, Todo) {

  // An example Backbone application contributed by
  // [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
  // [LocalStorage adapter](backbone-localstorage.js)
  // to persist Backbone models within your browser.

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      // Create a new Todo List.
      var list = new Todo.List();

      // Create a new layout.
      var main = new Backbone.LayoutManager({
        template: "main",

        views: {
          // Attach the root content View to the layout.
          "form": new Todo.Views.Form({
            collection: list
          }),

          // Attach the stats View into the content View.
          ".stats": new Todo.Views.Stats({
            collection: list
          }),

          // Attach the list View into the content View.
          ".list": new Todo.Views.List({
            collection: list
          })
        }
      });

      window.main = main;

      // Attach to the DOM
      main.$el.appendTo("#main");

      // Render
      main.render();

      // Fetch the data from localStorage
      list.fetch();
    }
  });

  // Shorthand the application namespace
  var app = namespace.app;

  // Treat the jQuery ready function as the entry point to the application.
  // Inside this function, kick-off all initialization, everything up to this
  // point should be definitions.
  $(function() {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();

    // Trigger the initial route and enable HTML5 History API support
    Backbone.history.start({ pushState: true });
  });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router.  If the link has a data-bypass
  // attribute, bypass the delegation completely.
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning its relative.
    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf("javascript:") !== 0) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events.  The Router's internal `navigate` method
      // calls this anyways.
      Backbone.history.navigate(href, true);
    }
  });

});
