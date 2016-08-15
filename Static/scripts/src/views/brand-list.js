define(['jquery', 'base/modules/carousel-slider'], function ($) {

    'use strict';
    function init(container, isCreate) {
        $('.brand-logos').each(function() {
            var $this = $(this);
            $this.owlCarousel({
                items: 1,
                dots: false,
                nav: true,
                navText: [
                    '<span class="glyphicon glyphicon-chevron-left arrow-circle" aria-hidden="true"></span>',
                    '<span class="glyphicon glyphicon-chevron-right arrow-circle" aria-hidden="true"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
        });
    }

    return {
        init: function (container, isCreate) {
            return init(container, isCreate);
        }
    };
});
