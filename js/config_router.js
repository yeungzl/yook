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
	                	files:[perfixJs + 'ng_block' + postfixJs]
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
		
}])