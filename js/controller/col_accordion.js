angular.module('mainApp').controller("colAccordionCtr",function($http,$scope,$rootScope,$filter){
	$(function () {
		    $(".menu-box .current").click(function(){
	            	$(this).animate({ width: '240px' }, 300).siblings().animate({ width: '30px' }, 300);
		    });
	});
	$(function () {
		    $(".menu-box .current1").click(function(){
		    	$(".menu-box div").siblings(".content1").hide(1000);
		    	$(this).children(".content1").show(1000)
//		    	siblings().hide(1000);
		    });
	});
})