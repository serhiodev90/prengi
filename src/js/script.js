$(document).ready(function(){

	//Burger

	$('.offer__burger').click(function(event) {
		$('.offer__burger, .offer__menu').toggleClass('active');
	});

	//Slider

	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
	});

	//Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks #contact').fadeOut('slow');
	});

	new WOW().init();
 });