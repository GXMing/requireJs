console.log("不会阻塞文档")

//$("body").css("margin",'200px')  //直接写报错
//添加jquery的依赖
define(['jquery'], function(){
	$("body").css("margin",'200px')
}); 
