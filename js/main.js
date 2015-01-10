
// MENU

$(function() {
	
$("#nav").addClass("js").before('<div id="menu" class="fa fa-bars faa-horizontal"></div>');
$("#menu").click(function(){
	$("#nav").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 1005) {
		$("#nav").removeAttr("style");
		$("#nav li a").unbind('click');
	} else {
	$('#nav li a').on("click", function(){
	$('#nav').hide();
	});	
	}
});	

});


/* 
$(function() {
	$('.blog-box').click(function(e) {
		e.preventDefault();
	});
});	
*/







// ------------------------
//  NOTES , IDEA , MISC...
// ------------------------


//First time trying to animate jquery

/*
  $('#navvvv-button').click(function(){
    $('.skype').fadeIn(2000);
	$('.practiceeee-fade').fadeIn(1000);
  });
*/








