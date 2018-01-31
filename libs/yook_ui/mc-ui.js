/**
* 该文件里存放一些自定义组件
* 作者: MC_GeWei
* 创建时间: 2017.03.22
**/
'use strict';
(function() {
    var ui = angular.module('mcUi', []);
//1.指令
	/*该指令绑定回车时间到特定元素上*/
	ui.directive('ngEnter', function() {
	    return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function ($scope, element, attrs, controller) {
	            element.bind("keydown keypress", function (event) {
	                if(event.which === 13) {
	                    $scope.$apply(function (){
	                        $scope.$eval(attrs.ngEnter);
	                    });
	                    event.preventDefault();
	                }
	            });
	        }
	    }
	});
	/*
	 * 将string转换成number
	 * data:原数据
	 * decimalDigits：保留的小数位数,可选，默认保留两位
	 * */
	ui.filter('string2number', function($filter) {
		return function(data, decimalDigits){
			// 汉字时显示汉字，数字时根据number显示数字格式
			if( !parseFloat(data) ){
				return data;
			}else{
				if(!decimalDigits && decimalDigits != 0){
					decimalDigits = 2;
				}
				data = $filter('number')(data,decimalDigits);
			}
			return data;
		};
	});
	
})();

















