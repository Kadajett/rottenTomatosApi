'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rottenTomatoesTestApp
 */
angular.module('rottenTomatoesTestApp')
  .controller('MainCtrl', function ($scope, movies) {
  	var init = function init(){
  		$scope.movies = null;
  	 	$scope.moviesSearch ="";


  		movies.getMovies()
  		.then(function(res){
  			//success
  			$scope.movies = res.movies;


  			
  		}, function(error){
  			//fAIL
  			
  			
  		})

  	}

  	$scope.searchButton= function searchButton(){
  		if($scope.moviesSearch){
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



  	init();
    
  });
