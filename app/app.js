(function (angular) {
    "use strict";

    // start your ride
var app=angular.module('moviecat',['ngRoute','moviecat.home_page','moviecat.movie_list','moviecat.service','moviecat.detail','moviecat.autoActive']);
    app.controller('mainController',['$scope', '$location',function ($scope,$location) {
$scope.search= function () {
    $location.url('/search?q='+$scope.query);
}
    }])

})(angular);