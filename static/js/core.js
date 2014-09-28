$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

$("Document").ready(function($){
	var nav = $(".MainMenu");
	$(window).scroll(function(){
		if($(this).scrollTop() > 485){
			nav.addClass("MainMenu-f");
		} else {
			nav.removeClass("MainMenu-f");
		}
	});
});
