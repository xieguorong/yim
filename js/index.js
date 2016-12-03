$(function(){
	function size(origin,type){
		var type=type || "x";
		if(type=="x"){
   			var widths=document.documentElement.clientWidth;
   			var sizes=widths/origin*100;
   		}else if(type=="y"){
   			var heights=document.documentElement.clientHeight;
   			var sizes=heights/origin*100;
   		}
   			document.getElementsByTagName("html")[0].style.fontSize=sizes+"px";
   			
   		}

   size(1134,"y");

	setInterval(function(){
		console.log(1)
		$(".xue").css("transform","translate(0,10px)")
	},1000)
})