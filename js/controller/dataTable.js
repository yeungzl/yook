angular.module('mainApp').controller("dataTableCtr",function($http,$scope,$rootScope,$filter,$Bd){
	$('.table').bootstrapTable({
		pagination:true, 					// 是否显示分页
		sortable:true, 						// 是否排序
		showRefresh:false, 					 // 是否显示刷新按钮
		pageSize: 2,                       //每页的记录行数（*）
		toolbar: "#toolbar", // 改菜单不能搭配  angular使用
		columns:[{
			field:"id",
			title:'IdTitle'
		},{
			field:"name",
			title:'nameTitle'
		},{
			field:"age",
			title:'ageTitle'
		}],
		formatNoMatches: function(){
		   return "";
		},
		formatLoadingMessage: function(){
		   return "";
		}
	})
	$(".table").bootstrapTable('load',[{
			id:"1",
			name:"张三",
			age:"13",
		},{
			id:"2",
			name:"张三1",
			age:"14",
		},{
			id:"3",
			name:"张三2",
			age:"15",
		}]
	)
	
})