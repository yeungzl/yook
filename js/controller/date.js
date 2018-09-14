angular.module('mainApp').controller("dateCtr",function($http,$scope,$rootScope,$filter,$Bd){
	$scope.param = {
		
	}
	$scope.param.getAllDayJs = `
		function numToCN (num){
	    	var arr = ["周日","周一","周二","周三","周四","周五","周六"];
	    	return arr[num];
	    	
    	}
	    function getAllDate(y){
	    	var _year = y || (new Date().getFullYear()); // 设置的年份
	    	var m_day = []; // 每个月对应的天数
	    	for(var i=1; i<=12; i++){
	    		var dayLength = (new Date(_year,i,0)).getDate();
	    		m_day.push(dayLength);
	    	}
	    	// 每一天是几年几月几日
	    	var allDate = [];
			for(i=0;i<m_day.length;i++){
				var _month = i>10?(i+1):("0" + "" + (i+1));
				for(j=1;j<=m_day[i];j++){
					var _day = j>9?j:("0" + "" + j);
					allDate.push(_year + '.' + _month + '.' + _day);
				}
			}
			var result = [];
			for(var i=0; i<allDate.length;i++){
				var _time = new Date(allDate[i]);
				result.push({
					_date:allDate[i],
					_week:numToCN((new Date(_time)).getDay())
				})
			}
			return result;
	    }
	    $scope.param.getAllDayHtml = getAllDate(2018);
	`
	function numToCN (num){
	    	var arr = ["周日","周一","周二","周三","周四","周五","周六"];
	    	return arr[num];
	    	
    }
    function getAllDate(y){
    	var _year = y || (new Date().getFullYear()); // 设置的年份
    	var m_day = []; // 每个月对应的天数
    	for(var i=1; i<=12; i++){
    		var dayLength = (new Date(_year,i,0)).getDate();
    		m_day.push(dayLength);
    	}
    	// 每一天是几年几月几日
    	var allDate = [];
		for(i=0;i<m_day.length;i++){
			var _month = i>10?(i+1):("0" + "" + (i+1));
			for(j=1;j<=m_day[i];j++){
				var _day = j>9?j:("0" + "" + j);
				allDate.push(_year + '.' + _month + '.' + _day);
			}
		}
		var result = [];
		for(var i=0; i<allDate.length;i++){
			var _time = new Date(allDate[i]);
			result.push({
				_date:allDate[i],
				_week:numToCN((new Date(_time)).getDay())
			})
		}
		return result;
    }
    $scope.param.getAllDayHtml = getAllDate(2018);
});