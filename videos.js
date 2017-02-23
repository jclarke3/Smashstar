SmashApp.controller('videoCtrl', function ($scope, $http, $location, SiteData) {
	console.log("in video controller");
	$scope.filteredVideos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 2
  ,$scope.maxSize = 5;
	
	if(SiteData.GetVideos()==undefined || SiteData.GetVideos()==null){
		var vidpromise = SiteData.SetVideos();
		vidpromise.then(function(result){
			$scope.videos = JSON.parse(result);
			console.log($scope.videos);
			  $scope.totalItems = $scope.videos.length;

			$scope.numPages = function () {
    		return Math.ceil($scope.videos.length / $scope.numPerPage);
  		};
			$scope.$watch('currentPage + numPerPage', function() {
    		var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    		, end = begin + $scope.numPerPage;
    
    		$scope.filteredVideos = $scope.videos.slice(begin, end);
  		});
		});
	}
	else{
			$scope.videos = SiteData.GetVideos();
			  $scope.totalItems = $scope.videos.length;

			console.log($scope.videos);
			$scope.numPages = function () {
    		return Math.ceil($scope.videos.length / $scope.numPerPage);
  		};
			$scope.$watch('currentPage + numPerPage', function() {
    		var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    		, end = begin + $scope.numPerPage;
    
    		$scope.filteredVideos = $scope.videos.slice(begin, end);
  		});
	}	
});