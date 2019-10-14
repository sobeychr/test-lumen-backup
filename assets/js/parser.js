import { base64, charCode, encoding } from './component/encoder.js';

(function($, undefined) {
    'use strict';

    const parser = (function() {

        const _actions = {
            base64,
            charCode,
            encoding,
        };

        const _config = {
            attr: 'data-action',
            sel:  'aside button',
            favRes: ['320p', '480p', '720p', '1080p'],
        };

        const init = () => {
            bound();
        }

        const bound = ()  => {
            $(_config.sel).on('click', function() {
                var $this  = $(this),
                    action = $this.attr(_config.attr),
                    isOn   = $this.hasClass('on'),
                    input  = $('#in').val(),
                    output = '';

                if(input.toString().length === 0) {
                    console.warn('Empty input for', action);
                }
                else if(_actions[action]) {
                    output = _actions[action](input, isOn);
                }
                else {
                    console.error('Unable execute parser', action);
                }

                $('#out').text(output);
            });
        };

        return {
            init,
        };
    })();

    $(function(){
        parser.init();
    });
})(jQuery);
