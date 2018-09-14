angular.module('mainApp').controller("ngBlockCtr1",function($http,$scope,$rootScope,$filter){
	$scope.myBlur = function () {
		alert('移除光标！');
		$scope.param.subBtn = true;
	}
	$scope.myClick = function ( ){
		alert("点击按钮！");
	}
	$scope.param = {
		subBtn:true,
	}
})