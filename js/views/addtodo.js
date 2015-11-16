
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Addtodos = Backbone.View.extend({
  template: _.template($('#addTaskTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = Addtodos;
