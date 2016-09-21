'use strict';

juke.controller('SidebarCtrl', function ($scope,PlaylistFactory) {

  // nothing to see here for now… state transitions happening with ui-sref!
  //$scope.playlists = [{name: '1'},{name: '2'}];
  
  	PlaylistFactory.getAll()
  	.then(function(playlists){
  		console.log(playlists);
  		$scope.playlists = playlists;
  	});
  

});
