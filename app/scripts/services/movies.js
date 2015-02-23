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
                    $q.all([
                        movies.getPosters(res.movies),
                        movies.getDetails(res.movies)

                        ]).then(function(){
                    	defer.resolve(res);
                    })
                    
    		

    	}).error(function(error, status){
    		defer.reject('failed')
    	})


    	return defer.promise;


    }

    movies.getSearch = function getMovies(search){
    	var defer = $q.defer();
    	$http.get('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' + movies.key + '&q=' + search)
    	.success(function(res){
    		movies.getPosters(res.movies)
                    .then(function(){
                    	defer.resolve(res);
                    })
                    movies.getDetails(res.movies)

    	}).error(function(error, status){
    		defer.reject('failed')
    	})


    	return defer.promise;


    }
    movies.getPosters = function getPosters(movieList){
        var defer = $q.defer();
        angular.forEach(movieList, function(movie, index){
            $http.get('http://www.omdbapi.com/?t=' +movie.title)
            .success(function(pic){
                if(pic.Poster!= "N/A"){
                    movie.posters.newPoster = pic.Poster;
                }else{
                    movie.posters.newPoster = movie.posters.original;

                }

                 }).error(function(error, smth){
                movie.posters.newPoster = movie.posters.original;
            })
            if(index>=movieList.length-1){
                defer.resolve();
            }

        })


        return defer.promise;
    }
    movies.getDetails = function getDetails(movieList){
        var defer = $q.defer();
        angular.forEach(movieList, function(movie, index){
            $http.get('http://api.rottentomatoes.com/api/public/v1.0/movies/'+movie.id+'?apikey=' + movies.key)
            .success(function(info){
                movie.info = info;
                
            })
            if(index>=movieList.length-1){
                defer.resolve();
            }

        })


        return defer.promise;
    }

     return movies;
  });
