import $ from 'jquery';
import { base64, charCode, encoding, urlEncode } from 'component/encoder';

(function($, undefined) {
    'use strict';

    const parser = (function() {

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
                const $this  = $(this),
                      action = $this.attr(_config.attr),
                      isOn   = $this.hasClass('on'),
                      input  = $('#in').val();
                let output = '';

                if(input.toString().length === 0) {
                    console.warn('Empty input for', action);
                }
                else if(_actions[action]) {
                    output = _actions[action](input, isOn);
                }
                else {
                    console.error('Unable execute parser', action, _actions);
                }

                $('#out').text(output);
            });
        };

        const urlList = ['hash', 'host', 'hostname', 'origin', 'pathname', 'port', 'protocol'];
        const urlParse = string => {
            const decode = urlEncode(string, false);
            const url = new URL(decode);
            const search = url.search.substring(1).split('&');

            const arr = [
                'original:', '\t' + url,
                'decoded:', '\t' + decode,
            ];
            urlList.forEach(entry => {
                if(url[arr]) {
                    arr.push(entry + ':', '\t' + url[key]);
                }
            });

            if(search.length > 0) {
                arr.push('search:', '\t' + url.search);

                search.forEach(entry => {
                    arr.push('\t\t' + entry.replace('=', ' = '));
                });
            }

            return arr.join('\n');
        };

        const _actions = {
            base64,
            charCode,
            encoding,
            url: urlParse,
        };

        return {
            init,
        };
    })();

    $(function(){
        parser.init();
    });
})($);
