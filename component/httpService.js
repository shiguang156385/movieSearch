/**
 * Created by longman on 2017/5/5.
 */
//创建jsop请求的数据的模块

(function(angular){
    var app = angular.module('moviecat.service', []);
    app.factory('myService', [function(){
        return{
            jsonp: function(url, params, callback){
                var querstring  = '?';
                for(var key in params){ //拼接成 ?start=0&count=20
                    querstring += key + '=' + params[key] + '&';
                }

                url += querstring; //拼接url

                //  url += 'callback=mycallback'

                // 每次要设置成 callback_121随机字符串的形式
                var mycallback = 'callback_' + Math.random().toString().substr(2);

                //window.mycallback =  callback; //最终的执行函数结果就是callback
                window[mycallback] = function(result){ // 这个函数由浏览器执行
                    callback(result); ///将result返回给controller
                }

                url += 'callback=' + mycallback; //这里的calback就不能写死，必须得传变量过去
                //动态创建script
                var script = document.createElement('script');

                //设置src
                script.src = url;

                //将创建script标签添加到元素上执行
                document.body.appendChild(script)
            }
        }
    }])
})(angular)
