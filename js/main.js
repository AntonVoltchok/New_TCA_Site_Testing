  $('#nav-button').click(function(){
    $('.skype').fadeIn(3000);
	$('.practice-fade').fadeIn(3000);
  });


$('#nav-button').click( function(){
  $(this).toggleClass('width');
  $(this).parent().toggleClass('show');
  $(this).children().toggleClass( 'fa-navicon').toggleClass( 'fa-close');
  $('#nav-list').toggleClass('nav-show'); 
});



