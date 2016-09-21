juke.config(function ($stateProvider) {
  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'PlaylistCtrl',
    resolve: {
    	thePlaylist: function(){return {}}
    }
	});

  $stateProvider.state('playlist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.playlistId);
      }
    }
  });
});