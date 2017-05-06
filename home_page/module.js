/**
 * Created by CD on 2017/5/5.
 */
(function (angular) {
var app=angular.module('moviecat.home_page',[]);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home_page',{
            templateUrl:'../home_page/view.html'
        }).otherwise({
            redirectTo:'/home_page'
        })
    }])

})(angular)