$(function(){
	if($(window).width()<992){
		
		}
//	$("nav ul").hide();
		$("nav div").click(function(){
			$("nav ul").slideToggle();
		});
		
	
//	轮播

	var index = 0;
	setInterval(function(){
		$(".banner div").removeClass("active");
		$(".banner div:eq("+index+")").addClass("active");
		index++;
		if(index >= $(".banner div").length){
			index=0;
		}
	},4000);
	
	
	
});
