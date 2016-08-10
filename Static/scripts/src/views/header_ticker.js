define(['jquery', 'underscore', 'backbone', 'base/modules/carousel-slider'], function ($) {
	$('.owl-carousel').owlCarousel({
	    items:1,
	    loop:true,
	    autoplay:true,
	    pagination: false,
	    dots: false,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true
	});

	$('.swiper-button-prev').on('click', function(){
		$('.owl-carousel').trigger('prev.owl.carousel', [300])
	})

	$('.swiper-button-next').on('click', function(){
		$('.owl-carousel').trigger('next.owl.carousel', [300])
	})
});