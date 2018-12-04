$(function(){
	$(".knob").knob();
	$(window).scroll(function() {
      percentage = parseInt((($(this).scrollTop()) / ($(document).height() - $(window).height())) * 100);
      $('.knob').val(percentage).trigger("change");
	});
	$('.backTop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 800);
	});
});