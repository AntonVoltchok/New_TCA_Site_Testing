  $('#nav-button').click(function(){
//    $('.skype').fadeIn(2000);
	$('.practice-fade').fadeIn(1000);
  });


$('#nav-button').click( function(){
  $(this).toggleClass('width');
  $(this).parent().toggleClass('show');
  $(this).children().toggleClass( 'fa-navicon').toggleClass( 'fa-close');
  $('#nav-list').toggleClass('nav-show'); 
});



