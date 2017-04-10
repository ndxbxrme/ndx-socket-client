'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module =angular.module 'ndx', []
module.factory 'socket', ($http) ->
  socket = io()
  on: socket.on
