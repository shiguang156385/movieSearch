/**
 * Created by longman on 2017/5/5.
 */
//自定义指令完成焦点切换的功能
(function(angular){
    var  app = angular.module('moviecat.autoActive', []);
    app.directive('autoActive', ['$location', function($location){
        return {
            restrict:'ACE',
            link: function(scope, element, attrs){
                //监听y用户点击路由的时候，#后面的url的变化
                scope.location = $location;
                scope.$watch('location.url()', function(newValue){
                    console.log('=========:', newValue);
                    //获得每个li标签的a标签的href属性
                    var href = element.children().attr('href');
                    console.log('href:', href, attrs);
                    if(href.indexOf(newValue) > -1){
                        //添加样式
                        element.parent().children().removeClass(attrs.autoActive); //移除兄弟和自己的样式
                        element.addClass(attrs.autoActive); //给自己添加样式
                    }
                })
            }
        }
    }])
})(angular)