/**
 * Created by CD on 2017/5/5.
 */
(function (angular) {
    var app=angular.module('moviecat.movie_list',[]);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page?',{
            templateUrl:'../movie_list/view.html',
            controller:'movielistCtrl'
        })
    }])
    app.controller('movielistCtrl',['$scope','$http','myService','$routeParams','$route', function ($scope, $http,myService,$routeParams,$route) {
        //$http.get('../movie_list/data.json').success(function (result) {
        //    $scope.list=result;
        //}).error(function (error) {
        //
        //})

        /*$http.jsonp('http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK').success(function (result) {
            $scope.list=result;
        }).error(function (error) {

        })*/
        var page=$routeParams.page;
        page=(page-0)|| 1;
        $scope.page=page;
        $scope.count=10;
        myService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,
            {
            start:(page-1)*$scope.count,
            count:$scope.count,
                q:$routeParams.q
        },
            function (result) {
                $scope.list=result;
                $scope.total=result.total;
                $scope.totalPage=Math.ceil($scope.total/$scope.count);
                $scope.isLoading=false;

                $scope.$apply();//手动触发脏检查
            }
        )
        //按钮点击实现分页效果
        $scope.goPage= function (newPage) {
            if(newPage<1||newPage>$scope.totalPage)
            return;
            $scope.page=newPage;
            $route.updateParams({
                page:newPage
            })
        }

    }])
})(angular)