$(document).foundation();

$(".page").click(function(){
	$(".lowerHide, .upperHide").slideToggle();
	$(".page").toggle();
	$(this).show();
});
