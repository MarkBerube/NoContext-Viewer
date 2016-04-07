define([
  'underscore',
  'backbone',
  'models/thread'
  ], function (_, Backbone,threadItem) {
    'use strict';

    var threadCollection = Backbone.Collection.extend({
      model: threadItem,

      url: 'https://www.reddit.com/r/nocontext/search.json?restrict_sr=0&t=day&sort=hot&limit=50',

      parse: function(data) {

        return _.shuffle(data.data.children);

      }

    });

    return threadCollection;
  });
