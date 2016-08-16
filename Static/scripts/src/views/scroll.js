define(['jquery'], function ($) {

    'use strict';
    function init(container, isCreate) {
        $('.scroll-button .next').on('click', function(){
            // console.log("click")
            $('.article-campaign').animate({scrollLeft: 500}, 1000)
        })

        changeArticleWidth()

        $(window).on('resize', function(){
            changeArticleWidth()
        })

        $('.toggle-right-button').on('click', function(){
            toggle_button_click(true)
            $(this).addClass("hidden-md hidden-lg")
            $('.toggle-left-button').removeClass("hidden-md hidden-lg")
        })

        $('.toggle-left-button').on('click', function(){
            toggle_button_click(false)
            $(this).addClass("hidden-md hidden-lg")
            $('.toggle-right-button').removeClass("hidden-md hidden-lg")
        })

    }

    function changeArticleWidth(){
        var article__body_width = 0

        $('.content-column').each(function(index, value){
            article__body_width += $(this).outerWidth() + 30
        })

        $('.article-campaign__body').css("width", article__body_width + "px")
    }

    function scroll(element, directionLeft, translate_distance){
        if(directionLeft === true) $(element).css("transform", "translate(-" + translate_distance+ "px)")
        else $(element).css("transform", "translate(0)")
    }

    function toggle_button_click(directionLeft){
        scroll(".article-campaign__body", directionLeft, 720)
    }

    return {
        init: function (container, isCreate) {
            return init(container, isCreate);
        }
    };
});