/**
 * Created by CD on 2017/5/6.
 */
(function (angular) {
    "use strict";
    //定义电影的详情
    var app=angular.module('moviecat.detail',[]);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie/details/:id',{
            templateUrl:'../movie_detail/view.html',
            controller:'detailCtroller'
        })
    }])
    app.controller('detailCtroller',['$scope','$routeParams','myService', function ($scope, $routeParams, myService) {
        var id=$routeParams.id;
        var url='http://api.douban.com/v2/movie/subject/'+id;
        myService.jsonp(url,{}, function (result) {
            $scope.details=result;
            console.log(result)
            $scope.isLoading=false;
            $scope.$apply();
        })
    }])
})(angular)