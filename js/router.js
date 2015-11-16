var Backbone = require('backbone');
var $ = require('jquery');

var collection = require('./collections/todos');
var views = {
  Add: require('./views/addtodo'),
  View: require('./views/viewtodos')
};

var Router = Backbone.Router.extend({
  routes: {
    "": "view",
    "add": "add"
  },

  view: function () {
    $('.viewtodos').html('');
    var view  = new views.View({
      collection: collection
    });
    collection.fetch().then(function(){
      // view.render();
      $('main').append(view.render().el);
    }
  )},

  add: function() {
  var view = new views.Add({

  });
  $('.addtodos').html(view.render().el);
}
});
Backbone.history.start();

module.exports = new Router();
