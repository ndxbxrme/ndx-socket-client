'use strict'
console.log 'angular', angular
angular.module 'ndx-socket', []
.factory 'socket', ($http) ->
  socket = io()
  socket: socket
