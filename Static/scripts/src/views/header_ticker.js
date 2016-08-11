define(['jquery', 'underscore', 'backbone', 'base/modules/carousel-slider'], function ($) {
	$('.carou').owlCarousel({
	    items:1,
	    loop:true,
	    autoplay:true,
	    pagination: false,
	    dots: false,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true
	});

	$('.swiper-button-prev').on('click', function(){
		$('.carou').trigger('prev.owl.carousel', [300])
	})

	$('.swiper-button-next').on('click', function(){
		$('.carou').trigger('next.owl.carousel', [300])
	})
});