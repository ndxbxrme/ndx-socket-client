(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx-socket', []);
  }

  module.factory('socket', function($http) {
    var socket;
    socket = io();
    return {
      on: socket.on
    };
  });

}).call(this);

//# sourceMappingURL=index.js.map
