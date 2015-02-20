'use strict';

/**
 * @ngdoc service
 * @name rottenTomatoesTestApp.movies
 * @description
 * # movies
 * Service in the rottenTomatoesTestApp.
 */
angular.module('rottenTomatoesTestApp')
  .service('movies', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //q95hen5b83ufabsgf62mqa64
     var movies = this;
    movies.key = "q95hen5b83ufabsgf62mqa64";
    movies.getMovies = function getMovies(search){
    	var defer = $q.defer();
    	$http.get('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=' + movies.key )
    	.success(function(res){
    		defer.resolve(res);

    	}).error(function(error, status){
    		defer.reject('failed')
    	})


    	return defer.promise;


    }

    movies.getSearch = function getMovies(search){
    	var defer = $q.defer();
    	$http.get('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' + movies.key + '&q=' + search)
    	.success(function(res){
    		defer.resolve(res);

    	}).error(function(error, status){
    		defer.reject('failed')
    	})


    	return defer.promise;


    }

     return movies;
  });
