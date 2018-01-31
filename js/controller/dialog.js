angular.module('mainApp').controller("dialogCtr",function($http,$scope,$rootScope,$filter,$Bd){
	$scope.BdRemind  = function () {
		$Bd.systemRemind("system remind of info Model test!");
	}
	$scope.BdConfirm = function () {
		$Bd.showConfirm("Are you sure about this?", $scope.yesConfirm);	
	}
	$scope.yesConfirm = function (){
		alert("是的");
	}
	$scope.BdSuccess = function () {
		$Bd.showSuccess("success！", 5000); // 5秒后自动关闭
	}
	$scope.BdErrFn = function () {
		$Bd.showErr("You have a error, please resove!");
	}
 })