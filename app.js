var SmashApp = angular.module('SmashApp',['ngRoute', 'ui.bootstrap']);
SmashApp.config(['$routeProvider', function ($routeProvider, $routeParams) {
	$routeProvider
		.when('/',{
			controller:'videoCtrl',
			templateUrl: 'pages/videos.html'
		})
		.when('/submit',{
			controller:'submitCtrl',
			templateUrl: 'pages/submit.html'
		})
		.when('/watch/:videoid',{
		 	controller:'watchCtrl',
		 	templateUrl: 'pages/watchvid.html'
		})
		.otherwise('/');		
}]);
	
SmashApp.factory('SiteData', function($http) {
	var factory={};
	var playerlist;
	var videolist;
	
	factory.GetPlayers = function(){
		return playerlist;
	};
	
	factory.SetPlayers = function(players){
		playerlist=players;
	}
	
	factory.GetVideos = function(){
		return videolist;
	}
	
	factory.SetVideos=function(){
		return $http({method:"GET", url:"http://localhost/smash.api/api/Videos"}).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
						videolist=JSON.parse(result.data);
            return result.data;
        });
	}
	
		// 	if(playerlist!=null){
		// 	return playerList;
		// }
		// else{				
		// 		$http({
		// 			method:'GET',
		// 			url: 'http://localhost/smash.api/api/Players'				
		// 		}).then(function successCallback(response){
		// 			playerlist = response.data;
		// 			console.log("success");
		// 			console.log(response);
		// 		}, function errorCallback(response){
		// 			console.log("error");
		// 			console.log(response);
		// 		}).then(function(){return playerlist});
		// }
	// factory.Videos = function(){
	// 	if(videolist!=null){
	// 		return playerList;
	// 	}
	// 	else{				
	// 			$http({
	// 				method:'GET',
	// 				url: 'http://localhost/smash.api/api/Videos'				
	// 			}).then(function successCallback(response){
	// 				videolist = response.data;
	// 				console.log("success");
	// 				console.log(response);
	// 				return videolist;
	// 			}, function errorCallback(response){
	// 				console.log("error");
	// 				console.log(response);
	// 			});
	// 	}
	// };
	
	return factory;
});