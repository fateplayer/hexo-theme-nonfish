$(function(){
	$(".knob").knob();
	$(window).scroll(function() {
      percentage = parseInt(((jQuery(this).scrollTop()) / (jQuery(document).height() - $(window).height())) * 100);
      $('.knob').val(percentage).trigger("change");
	});
	$('.Gotop').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});
});