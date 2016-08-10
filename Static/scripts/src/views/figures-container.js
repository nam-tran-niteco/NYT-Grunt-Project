define(['jquery', 'waypoints'], function ($) {

    'use strict';
    function init(container, isCreate) {
        var time_stop = 5000
        $('.figures-container').waypoint({
            handler: function() {
                for(let i = 0; i < 4; i++){
                    var item = $('.item-' + i)
                    var count = item.attr('count')
                    var loop_number = 0
                    var offset = count / time_stop
                    setInterval(function(){
                        if(loop_number > count){
                            item.html(count)
                            return
                        }
                        loop_number += offset 
                        item.html(Math.round(loop_number))
                    }, time_stop / count)
                }
                $(this).waypoint('destroy');
            },
            offset: "60%"
        })
    }

    return {
        init: function (container, isCreate) {
            return init(container, isCreate);
        }
    };
});
