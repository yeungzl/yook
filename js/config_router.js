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
		.state('data-Table',{
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
}])