(function() {
  'use strict';
  console.log('angular', angular);

  angular.module('ndx-socket', []).factory('socket', function($http) {
    var socket;
    socket = io();
    return {
      socket: socket
    };
  });

}).call(this);

//# sourceMappingURL=index.js.map
