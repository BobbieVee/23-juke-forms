'use strict';

/* PLaylist (PLURAL) CONTROLLER */

juke.controller('PlaylistCtrl', function ($scope) {

  $scope.playlist;
  $scope.output = function(){
  	console.log("the new playlist: ", {name: $scope.playlist} );
  }
  

});