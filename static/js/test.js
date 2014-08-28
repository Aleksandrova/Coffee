console.log("sup");

$("#button-products").click(function(){
	$('html, body').animate({
		scrollTop: $("#products-block").offset().top
	}, 8000);
});

$("#button-about").click(function(){
	$('html, body').animate({
		scrollTop: $("#about-block").offset().top
	}, 1000);
});

$("#button-contact").click(function(){
	$('html, body').animate({
		scrollTop: $("#contact-block").offset().top
	}, 1100);
});