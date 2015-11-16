var Backbone = require('backbone');

var Todos = Backbone.Collection.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections/pllewis1',
  parse: function(data){
    return data.todos;
  }
});

module.exports = new Todos();
