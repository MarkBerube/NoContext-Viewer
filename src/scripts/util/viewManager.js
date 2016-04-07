define([
  'underscore',
  'backbone',
  'jquery'
], function (_, Backbone, $) {
  'use strict';


var ViewManager = {
    currentView : null,
    showView : function(view) {
        if (this.currentView !== null && this.currentView.cid != view.cid) {
            this.currentView.remove();
        }
        this.currentView = view;
        var html = view.render().el;
        $(".bbContainer").empty().html(html);
    }
}

  return ViewManager;
});
