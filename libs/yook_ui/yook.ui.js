// 
//  yeung.ui.js
//  <project>
//  一些制定 的 过滤器 组件等
//  Created by mk on 2017-12-14.
//  Copyright 2017 mk. All rights reserved.
// 
'use strict';
(function(){
	var yook = angular.module('yook.filter',[]);
	//	自定义 ng-enter 指令
	yook.directive('ngEnter', function() {
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
	})
	/*
	 * 将number 转换成 大写金额
	 * */
  	yook.filter("rmbFilter",function(){
  		return function(num) {
        var sum;
        num = String(num);
        num = num.replace(",","");
  			var numberValue = new String(Math.round(Number(num) * 100)); // 数字金额
  			var chineseValue = ""; // 转换后的汉字金额
  			var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
  			var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
  			var len = numberValue.length; // numberValue 的字符串长度
  			var Ch1; // 数字的汉语读法
  			var Ch2; // 数字位的汉字读法
  			var nZero = 0; // 用来计算连续的零值的个数
  			var String3; // 指定位置的数值
  			if(len > 15) {
  				alert("超出计算范围");
  				return "";
  			}
  			if(numberValue == 0) {
  				chineseValue = "零元整";
  				return chineseValue;
  			}
  			String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
  			for(var i = 0; i < len; i++) {
  				String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
  				if(i != (len - 3) && i != (len - 7) && i != (len - 11) && i != (len - 15)) {
  					if(String3 == 0) {
  						Ch1 = "";
  						Ch2 = "";
  						nZero = nZero + 1;
  					} else if(String3 != 0 && nZero != 0) {
  						Ch1 = "零" + String1.substr(String3, 1);
  						Ch2 = String2.substr(i, 1);
  						nZero = 0;
  					} else {
  						Ch1 = String1.substr(String3, 1);
  						Ch2 = String2.substr(i, 1);
  						nZero = 0;
  					}
  				} else { // 该位是万亿，亿，万，元位等关键位
  					if(String3 != 0 && nZero != 0) {
  						Ch1 = "零" + String1.substr(String3, 1);
  						Ch2 = String2.substr(i, 1);
  						nZero = 0;
  					} else if(String3 != 0 && nZero == 0) {
  						Ch1 = String1.substr(String3, 1);
  						Ch2 = String2.substr(i, 1);
  						nZero = 0;
  					} else if(String3 == 0 && nZero >= 3) {
  						Ch1 = "";
  						Ch2 = "";
  						nZero = nZero + 1;
  					} else {
  						Ch1 = "";
  						Ch2 = String2.substr(i, 1);
  						nZero = nZero + 1;
  					}
  					if(i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
  						Ch2 = String2.substr(i, 1);
  					}
  				}
  				chineseValue = chineseValue + Ch1 + Ch2;
  			}
  			if(String3 == 0) { // 最后一位（分）为0时，加上“整”
  				chineseValue = chineseValue + "整";
  			}
  			return chineseValue;
  		}
  });
  /*
   * 将number 转换成 汉字
   * */
   yook.filter("chineseFilter", function () {
       return function(num) {
         num = Number(num);
         var upperCaseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
         var length = String(num).length;
         if (length == 1) {
           return upperCaseNumber[num];
         } else if (length == 2) {
           if (num == 10) {
             return upperCaseNumber[num];
           } else if (num > 10 && num < 20) {
             return '十' + upperCaseNumber[String(num).charAt(1)];
           } else {
             return upperCaseNumber[String(num).charAt(0)] + '十' + upperCaseNumber[String(num).charAt(1)].replace('零', '');
           }
         }
       }
   })
})();
