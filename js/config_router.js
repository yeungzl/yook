'use strict';
var app = angular.module("mainApp",['ui.router','oc.lazyLoad']);
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	var prefixHtml = "./html/";
	var postfixHtml = ".html";
	var perfixJs = "./js/controller/";
	var postfixJs = '.js';
	$stateProvider
		.state('/',{
			url:'/',
			templateUrl:'/',
		})
		.state('dialog',{
			url:'/dialog',
			templateUrl: prefixHtml + 'dialog' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'dialog' + postfixJs]
		            });
	            }]
	        }
		})
		.state('data-Table',{ // bootStrap data-table
			url:'/data-Table',
			templateUrl: prefixHtml + 'dataTable' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'dataTable' + postfixJs]
		            });
	            }]
	        }
		})
		.state('css-focus',{ // input textarea  聚焦事件 
			url:'/css-focus',
			templateUrl: prefixHtml + 'css_focus' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'css_focus' + postfixJs]
		            });
	            }]
	        }
		})
		.state('col-accordion',{ // input textarea  聚焦事件 
			url:'/col-accordion',
			templateUrl: prefixHtml + 'col_accordion' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'col_accordion' + postfixJs]
		            });
	            }]
	        }
		})
		// angularJS文件设置区  一级菜单
		.state('ngArea',{ 
			url:'/ngArea',
			templateUrl: prefixHtml + 'ng_block' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'ng_block' + postfixJs]
		            });
	            }]
	        }
		})
		.state('ngArea.test',{
			url:'/ng_test1',
			templateUrl: prefixHtml + 'ng_block_html/ng_test1' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'ng_block_js/ng_test1' + postfixJs]
		            });
	            }]
	        }
		})
		.state('ngArea.test2',{
			url:'/ng_test2',
			templateUrl: prefixHtml + 'ng_block_html/ng_test2' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'ng_block' + postfixJs]
		            });
	            }]
	        }
		})
		// ES6	区域   一级菜单
		.state('ES6Block',{
			url:'/ES6_block',
			templateUrl: prefixHtml + 'ES6' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'ES6' + postfixJs]
		            });
	            }]
	        }
		})
		.state('ES6Block.know',{
			url:'/know',
			templateUrl: prefixHtml + 'ES6_block/know' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'ES6_block/know' + postfixJs]
		            });
	            }]
	        }
		})
		// ES6  函数
		.state('ES6Block.fun',{
			url:'/ES6_fun',
			templateUrl: prefixHtml + 'ES6_block/fun' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'ES6_block/fun' + postfixJs]
		            });
	            }]
	        }
		})
		// new Date	区域   一级菜单
		.state('date',{
			url:'/date',
			templateUrl: prefixHtml + 'date' + postfixHtml,
//			controller: "secondCtr",
			resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:[perfixJs + 'date' + postfixJs]
		            });
	            }]
	        }
		})
		
}])