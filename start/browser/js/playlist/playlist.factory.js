juke.factory('PlaylistFactory', function ($http) {

  var PlaylistFactory = {};

  var playlists = [];

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
    	var playlist = response.data;
    	//playlists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.getAll = function(){
  	return $http.get('/api/playlists')
  	.then(function(response){
  		angular.copy(response.data,playlists);

  		return playlists;

  	});
  };

  PlaylistFactory.fetchById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) { return response.data; });
  };

  return PlaylistFactory;

});