define(['jquery'], function ($) {

    'use strict';
    function init(container, isCreate) {
        $('.brand-logos').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText: [
                '<span class="glyphicon glyphicon-chevron-left arrow-circle" aria-hidden="true"></span>',
                '<span class="glyphicon glyphicon-chevron-right arrow-circle" aria-hidden="true"></span>'
            ],
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1440: {
                    items: 5
                }
            }
        })
    }

    return {
        init: function (container, isCreate) {
            return init(container, isCreate);
        }
    };
});
