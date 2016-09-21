'use strict';

/* PLaylist (PLURAL) CONTROLLER */

juke.controller('PlaylistCtrl', function ($scope, $state,PlaylistFactory, thePlaylist) {

  $scope.new_playlist;
  $scope.playlist = thePlaylist;

  $scope.output = function(){
  	console.log("the new playlist: ", {name: $scope.new_playlist} );
  }
  $scope.create = function(){
  	  	console.log("create the new playlist: ", {name: $scope.new_playlist} );
  	  	var data = {name: $scope.new_playlist};
  	  	var createdPlaylist; 
  	  	PlaylistFactory.create(data)
  	  	.then(function(response){
  	  		console.log('created data with response, ', response);
  	  		$scope.new_playlist = '';
  	  		createdPlaylist = response;
  	  		return PlaylistFactory.getAll();
  	  	})
  	  	.then(function(response){
  	  		console.log('got all ', response);
  	  		$state.go('playlist',{playlistId: createdPlaylist.id});

  	  	});
  }
  

});

