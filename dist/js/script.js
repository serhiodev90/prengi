$(document).ready(function(){
	$('.offer__burger').click(function(event) {
		$('.offer__burger, .offer__menu').toggleClass('active');
	});

	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					dots: false
				}
			}
		]
	});
 });