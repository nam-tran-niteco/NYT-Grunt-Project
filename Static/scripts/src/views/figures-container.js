define(['jquery', 'waypoints'], function ($) {

    'use strict';
    function init(container, isCreate) {
        var time_stop = 5000
        $('.figures-container').waypoint({
            handler: function() {
                $('.figure__item i').each(function(){
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).parent().attr('count')
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function(now){
                            now = Math.ceil(now)
                            if(now >= 1000){
                                var suffix = now % 1000
                                if(suffix < 10) suffix = '00' + suffix
                                else if(suffix < 100) suffix = '0' + suffix   
                                now = Math.ceil(now / 1000) + ',' + suffix
                            }
                            $(this).text(now)
                        }
                    })
                })
                $(this).waypoint('destroy');
            },
            offset: "60%"
        })

        desktopSizeCustomAddClass()
        // var still_medium_size = is_medium_size()        
        // $(window).on('resize', function(){
        //     if (is_medium_size()){
        //         if (!still_medium_size){
        //             still_medium_size = true
        //             desktopSizeCustomAddClass()
        //         }
        //     }
        //     else {
        //         if (still_medium_size){
        //             still_medium_size = false
        //             desktopSizeCustomRemoveClass()
        //         }
        //     }
        // })
    }

    function desktopSizeCustomAddClass(){
        $('.figure').each(function(index, value){
            switch(index){
                case 0: $(this).addClass("col-md-4"); break;
                case 1: $(this).addClass("col-md-3"); break;
                case 2: $(this).addClass("col-md-3"); break;
                case 3: $(this).addClass("col-md-2"); break;
            }
        })
    }

    // function desktopSizeCustomRemoveClass(){
    //     $('.figure').each(function(index, value){
    //         switch(index){
    //             case 0: $(this).removeClass("col-md-4"); break;
    //             case 1: $(this).removeClass("col-md-3"); break;
    //             case 2: $(this).removeClass("col-md-3"); break;
    //             case 3: $(this).removeClass("col-md-2"); break;
    //         }
    //     })
    // }

    // function is_medium_size(){
    //     var windowWidth = $(window).innerWidth()
    //     if( windowWidth >= 992 && windowWidth <= 1200 ) return true
    //     return false
    // }

    return {
        init: function (container, isCreate) {
            return init(container, isCreate);
        }
    };
});
