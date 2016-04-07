/*global define*/

define([
  'jquery',
  'backbone',
  'views/homeView',
  'util/viewManager'
], function ($, Backbone, vHome, vMan) {
  'use strict';

  var appRouter = Backbone.Router.extend({
    routes: {
   		'': 'home',
    },

  'home': function(){
    var homeView =  new vHome();
      vMan.showView(homeView);
  }

  });

  return appRouter;
});
