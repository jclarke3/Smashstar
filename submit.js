SmashApp.controller('submitCtrl', function ($scope, $http, $location, SiteData) {
	//console.log(PlayerList.Players());
	//PlayerList.getAllPlayers();
	$scope.video = {};
	$scope.submit = function(){
		console.log($scope.video);
		$http({
			method:'POST',
			url: 'http://localhost/smash.api/api/submit',
			//url:'http://localhost/PizzaApi/api/Register/NewCustomer',
			//url:'http://192.168.60.115/PizzaApi/api/Register/NewCustomer',
			data: JSON.stringify($scope.video)
		}).then(function successCallback(response){
			console.log("success");
			console.log(response);
		}, function errorCallback(response){
			console.log("error");
			console.log(response);
		}).then(function(){alert('redirect');$location.path('videos')});		
	};
		console.log(PlayerList.Players);

});