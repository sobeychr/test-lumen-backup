// @import "component/encoder.js";

(function($, _enc, undefined){
    'use strict';

    var parser = (function() {

        var _config = {
            attr: 'data-action',
            sel:  'aside button'
        };

        var init = function() {
            bound();
        }

        var bound = function() {
            $(_config.sel).on('click', function() {
                var $this  = $(this),
                    action = $this.attr(_config.attr),
                    isOn   = $this.hasClass('on'),
                    input  = $('#in').val();

                if(input.toString().length === 0) {
                    console.warn('Empty input for', action);
                }
                else if(typeof _enc[action] !== 'function') {
                    console.error('Undefined encoder', action);
                }
                else {
                    var output = _enc[action](input, isOn);
                    $('#out').text(output);
                }
            });
        };

        return {
            init: init,
        };
    })();

    $(function(){
        parser.init();
    });
})(jQuery, window.encoder);
