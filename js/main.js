'use strict';
	var yookApp = angular.module('mainApp').controller("mainCtr",function($http,$scope,$rootScope,$filter){
		
		$scope.menu_code = menu_code; // HTML的菜单配置 来自menu_code.js
		
		$scope.xxx = "200";
	//	function systermAlert(data) {
	//		BootstrapDialog.alert({
	//			title: '系统提示',
	//			message: data,
	//			cssClass: 'login-dialog',
	//		});
	//	}
	});
	/**
	 *	自定义指令 ng-enter
	 * */
	yookApp.directive('ngEnter', function() {
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
	/**
	 *	dialog弹窗  分装
	 * */
//	var types = [BootstrapDialog.TYPE_DEFAULT, 
//                   BootstrapDialog.TYPE_INFO, 
//                   BootstrapDialog.TYPE_PRIMARY, 
//                   BootstrapDialog.TYPE_SUCCESS, 
//                   BootstrapDialog.TYPE_WARNING, 
//                   BootstrapDialog.TYPE_DANGER];
	yookApp.service('$Bd', function() {
		// 系统提示框
		this.systemRemind = function (str) {
	      BootstrapDialog.alert({
				title: '系统提示',
				message: str,
				cssClass: 'login-dialog',
				closable : false, // <-- Default value is false，点击对话框以外的页面内容可关闭
      			draggable : true, // <-- Default value is false，可拖拽
			});
	    }
		// confirm确认选择框
		this.showConfirm = function (str,fn){
		   BootstrapDialog.confirm({
		        title : '确认',
		        message : str,
		        type : BootstrapDialog.TYPE_WARNING, // <-- Default value is
		        // BootstrapDialog.TYPE_PRIMARY
		        closable : false, // <-- Default value is false，点击对话框以外的页面内容可关闭
		        draggable : true, // <-- Default value is false，可拖拽
		        btnCancelLabel : '取消', // <-- Default value is 'Cancel',
		        btnOKLabel : '确定', // <-- Default value is 'OK',
		        btnOKClass : 'btn-warning', // <-- If you didn't specify it, dialog type
		        // 对话框关闭的时候执行方法
		        callback : function(result) {
		            // 点击确定按钮时，result为true
		            if (result) {
		                // 执行方法
		                if(fn){
		                	fn();
		                }
		            }
		        }
		    });
		}
		this.showSuccess = function(str, time) {
		    BootstrapDialog.show({
		        type : BootstrapDialog.TYPE_SUCCESS,
		        title : '系统提示 ',
		        message : str,
		        size : BootstrapDialog.SIZE_SMALL,
		        buttons : [ {
		            label : '确定',
		            action : function(dialogItself) {
		                dialogItself.close();
		            }
		        } ],
		        // 指定时间内可自动关闭
		        onshown : function(dialogRef) {
		            setTimeout(function() {
		                dialogRef.close();
		            }, time); // 时间毫秒计算
		        },
		    });
		}
		//弹出错误提示
		this.showErr = function (str) {
		    // 调用show方法
		    BootstrapDialog.show({
		        type : BootstrapDialog.TYPE_DANGER,
		        title : '系统提示 ',
		        message : str,
		        closable : false, // <-- Default value is false，点击对话框以外的页面内容可关闭
		        draggable : true, // <-- Default value is false，可拖拽
		        size : BootstrapDialog.SIZE_SMALL,//size为小，默认的对话框比较宽
		        buttons : [ {// 设置关闭按钮
		            label : '关闭',
		            action : function(dialogItself) {
		                dialogItself.close();
		            }
		        } ],
		        // 对话框关闭时带入callback方法
//		        onhide : func
		    });
		}
		this.showModel = function () {
			
		}
	});
