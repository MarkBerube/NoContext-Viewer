/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
  },
  paths: {
    jquery: 'bower_components/jquery',
    backbone: 'bower_components/backbone',
    underscore: 'bower_components/lodash',
    bootstrap: 'bootstrap'
  }
});

require([
  'backbone',
  'routes/appRouter'
], function (Backbone,Route) {
  var app = new Route();
  Backbone.history.start();
});
