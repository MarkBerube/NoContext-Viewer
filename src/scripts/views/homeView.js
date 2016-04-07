/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collection/threadCollection'
  ], function ($, _, Backbone, JST, threadCollection) {
    'use strict';

    var HomeView = Backbone.View.extend({

      template: JST['src/scripts/templates/homeView.ejs'],
      collection: new threadCollection(),
      tagName: 'div',
      className: 'home-view',
      events: {},

      initialize: function () {
        this.listenTo( this.collection, 'add change', this.render, this );
        this.collection.fetch();
        this.collection.shuffle();
      },
      render: function () {

        var rand = Math.floor(Math.random() * 5) + 1;  

        this.$el.html(this.template({threads:this.collection.toJSON(),randNum:rand}));
        
        return this;
      }
    });

    return HomeView;
  });
