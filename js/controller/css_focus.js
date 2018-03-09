angular.module('mainApp').controller("focusCtr",function($http,$scope,$rootScope,$filter,$Bd,$timeout){
	$scope.searchVal = "please select";
	$scope.editSearchFn = function(val){
		var list = $scope.searchListAll;
		var endList = [];
		for(var i=0; i<list.length; i++){
			if(list[i].search(val) != -1){
				endList.push(list[i]);
			}else{
				continue;
			}
		}
		$scope.searchList = endList;
	}
	$scope.choseSearchFn = function(val){
		$scope.searchVal1 = val
		$scope.searchList = [];
	}
	$scope.searchListAll = ["aaa","abc","bbb","ccc"];
})