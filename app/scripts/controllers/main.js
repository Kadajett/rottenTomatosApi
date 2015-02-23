'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rottenTomatoesTestApp
 */
angular.module('rottenTomatoesTestApp')
  .controller('MainCtrl', function ($scope, movies, $modal) {
  	var init = function init(){
  		$scope.movies = null;
  	 	$scope.moviesSearch ="";
      $scope.movieType="";


  		movies.getMovies()
  		.then(function(res){
  			//success
  			$scope.movies = res.movies;


  			
  		}, function(error){
  			//fAIL
  			
  			
  		})

  	}

  	$scope.searchButton= function searchButton(){
  		if(true){
  			movies.getSearch($scope.moviesSearch)
  		.then(function(res){
  			//success
  			$scope.movies = res.movies;


  			
  		}, function(error){
  			//fAIL
  			
  			
  		})
  	}else{

  		}


  	}
    /**
     * [click pop up ]
     * @param  {[object]} movie [movie details]
     * @return {[null]}       [null]
     */
    $scope.clickMovie=function clickMovie(movie){
        $modal.open({
          templateUrl: "/views/moviedetail.html",
          controller:"MoviedetailCtrl",
          resolve:{
            movieObj: function(){
              return movie;
            }
          }
        })
    }



  	init();
    
  });
