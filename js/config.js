var yookApp = angular.module('mainApp').config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide,  $httpProvider) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;

        /*统一设置请求头*/
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json; charset=UTF-8';
        
        /*后台基于此请求头信息判断请求是否是通过ajax发起的，便于处理重定向*/
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }
  ]);