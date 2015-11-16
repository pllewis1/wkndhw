var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Viewtodos = Backbone.View.extend({
  template: _.template($('#todoListTemplate').html()),
  render: function(){
    this.$el.html(this.template({
      todos: this.collection.toJSON()
    }));
    return this;
  }
});

module.exports = Viewtodos;
