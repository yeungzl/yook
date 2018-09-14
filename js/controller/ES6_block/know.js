angular.module('mainApp').controller("knowCtr",function($http,$scope,$rootScope,$filter,$Bd){
    $scope.param = {
    	oneHtml:'',
    	oneJs:"",
    	twoHtml:"",
    	twoJs:"",
    	threeJs:""
    }
   	
    /************  const  *************/
    $scope.param.oneHtml = `
    	var funcs = [];
	    for (var i = 0; i < 10; i++) {
	        funcs.push(function() { 
	        	$scope.param.oneJs += i + ",";
	       	})
	    }
	    funcs.forEach(function(func) {
	        func()
	    })
	`;
	var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs.push(function() { 
        	$scope.param.oneJs += i + ",";
       	})
    }
    funcs.forEach(function(func) {
        func()
    })
    /************  let  *************/
    $scope.param.twoHtml = `
    	var funcs1 = [];
	    for (let j = 0; j < 10; j++) {
	    	funcs1.push(function(){
	    		$scope.param.twoJs += j + ",";
	    	})
	    }
	    funcs1.forEach(function(func) {
	        func()
	    })
    `;
    var funcs1 = [];
    for (let j = 0; j < 10; j++) {
    	funcs1.push(function(){
    		$scope.param.twoJs += j + ",";
    	})
    }
    funcs1.forEach(function(func) {
        func()
    })
    
    /************  let  *************/
    /* ${} 来拼接字符串 */
    //es5 
//  var name = 'lux'
//  console.log('hello' + name)
    // es6
    const name = 'lux';
    console.log(`hello ${name}`) //hello lux
    $scope.param.thirdHtml = `
    	const name = 'lux'
    	console.log(hello ${name}) //hello lux
    `;
    $scope.param.threeJs = `hello ${name}`;
    
    
    /************ includes  *************/
   let str = "dododoaa";
   console.log(str.includes("doaa"))
	$scope.param.includesHtml = `
		let str = "dododoaa";
		console.log(str.includes("doaa"))
		//判断字符串中是否包含指定的字符
	`;
   $scope.param.includesJs = str.includes("doaa");
   
    /************ repeat  *************/
   	// 2.repeat: 获取字符串重复n次
    let s = 'str'
    console.log(s.repeat(3)) // 'hehehe'
    $scope.param.repeatHtml = `
    	let s = 'str'
    	console.log(s.repeat(3))
    	//repeat: 获取字符串重复n次
    `;
    $scope.param.repeatJs = s.repeat(3);
})