// 
//  yook.dialog.js
//  <project>
//  
//  Created by yook on 2018-01-25.
//  Copyright 2018 yook. All rights reserved.
// 
'use strict';
(function(){
	//	自定义 bootstrap-dialog 弹窗
	var yook = angular.module('yook.dialog',[]);
//	yook.service('dialog', function() {
//		this.DaRemind = function (data) {
//	      return BootstrapDialog.alert({
//				title: '系统提示',
//				message: data,
//				cssClass: 'login-dialog',
//			});
//	    }
//	});
	yook.service('$dialog', function() {
		this.DaRemind = function (data) {
	     	alert("111");
	    }
	});
})();
