(function($, undefined){
    'use strict';

    var parser = (function() {

        var init = function() {
            bound();
        }

        var bound = function() {
            $('aside button').on('click', function() {
                $('#out').text('success');
            })
        };

        return {
            init: init
        };
    })();

    $(function(){
        parser.init();
    });
})(jQuery);
