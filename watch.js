SmashApp.controller('watchCtrl', function ($scope, $http, $location, SiteData, $routeParams) {
  $scope.videoid = $routeParams.videoid;
  
  if(SiteData.GetVideos()==undefined || SiteData.GetVideos()==null){
		var vidpromise = SiteData.SetVideos();
		vidpromise.then(function(result){
			$scope.videos = JSON.parse(result);
			console.log($scope.videos);
      setFrame();
		});
	}
	else{
			$scope.videos = SiteData.GetVideos();
			console.log($scope.videos);
      setFrame();
	}
 
  function setFrame() {
    for(var i = 0; i < $scope.videos.length; i++){
        if($scope.videos[i].VideoId == $scope.videoid){
          console.log($scope.videos[i].URL);
          if($scope.videos[i].Source == "twitter"){
          var inner = '<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr">' + 
            $scope.videos[i].Title + '<a href="https://t.co/37542zy8Ct"></a></p><a href="' + $scope.videos[i].URL +'"></a></blockquote>';
          // inner+=$scope.videos[i].URL;
          // inner+='"></a></p><a href="';
          // inner+=$scope.videos[i].URL;
          // inner+='"></a></blockquote>';
          console.log(inner);
          }
          else if($scope.videos[i].Source == "youtube"){
            var newURL = $scope.videos[i].URL.replace("watch?v=", "embed/");
            var inner = '<iframe width="560" height="315" src="' + newURL + '" frameborder="0" allowfullscreen></iframe>';
          }
          else if($scope.videos[i].Source == "oddshot"){
            var inner = '<iframe width="560" height="315" src="' + $scope.videos[i].URL + '/embed" frameborder="0" allowfullscreen></iframe>';
          }
          //console.log(document.getElementById("show").innerHTML);
          
          //document.getElementById("show").innerHTML = '<blockquote class="twitter-video" data-lang="en"><p lang="und" dir="ltr"><a href="https://t.co/R8OKkVrT7F"></a></p><a href="https://twitter.com/wazhlon/status/747427883933630464"></a></blockquote>';

          document.getElementById("show").innerHTML = inner;
          /*window.onload = function(){
            con
            document.getElementById("show").innerHTML = inner;
            //document.getElementById("show").innerHTML = '<blockquote class="twitter-video" data-lang="en"><p lang="und" dir="ltr"><a href="https://t.co/R8OKkVrT7F"></a></p><a href="https://twitter.com/wazhlon/status/747427883933630464"></a></blockquote>';
          };   */              
        }
      }
  } 
  
});