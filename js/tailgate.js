$(function(){
	$(".list ul li").mouseover(function(){
		$(".list ul li .top .mengc").removeClass("active");
		$(".list ul li .texts a").removeClass("active");
		$(this).find(".top div").addClass("active");
		$(this).find(".texts a").addClass("active");
	});
})
