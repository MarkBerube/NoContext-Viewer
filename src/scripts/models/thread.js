/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var threadItem = Backbone.Model.extend({
    parse: function(response, options)  {
      return response.data;
    }
  });

  return threadItem;
});
