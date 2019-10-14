// @import "component/encoder.js";
// @import "component/filesize.js";

(function($, _enc, _fs, undefined){
    'use strict';

    var parser = (function() {

        var _config = {
            attr: 'data-action',
            sel:  'aside button',
            favRes: ['320p', '480p', '720p', '1080p'],
        };

        var init = function() {
            bound();
        }

        var bound = function() {
            $(_config.sel).on('click', function() {
                var $this  = $(this),
                    action = $this.attr(_config.attr),
                    isOn   = $this.hasClass('on'),
                    input  = $('#in').val(),
                    output = '';

                if(input.toString().length === 0) {
                    console.warn('Empty input for', action);
                }
                else if(typeof _enc[action] === 'function') {
                    output = _enc[action](input, isOn);
                }
                else {
                    try {
                        output = eval(action + '(input)');
                    }
                    catch(err) {
                        console.error('Unable execute parser', action);
                    }
                }

                $('#out').text(output);
            });
        };

        var favorite = function(string) {
            var output = string.substring( string.indexOf('{') );
            output = output.substring(0, output.lastIndexOf('}')+1 );

            var json;
            try {
                json = JSON.parse(output);
            }
            catch(err) {
                console.error('Unable to parse JSON', err);
                console.warn('Invalid JSon string', output);
            }

            var title = '',
                videos = [],
                final = [],
                link = '',
                size = 0;

            json.result.forEach(function(entry) {
                title = entry.scene.title;
                videos = entry.scene.videos.full.files;

                final.push(title);
                _config.favRes.forEach(function(res) {
                    if(typeof videos[res] === 'object') {
                        link = videos[res].urls.download;
                        size = _fs.pretty(videos[res].sizeBytes);
                        final.push('  ' + res + ' - ' + size);
                        final.push('\t' + link);
                    }
                });
            });

            return final.join('\n');
        };

        return {
            init: init,
        };
    })();

    $(function(){
        parser.init();
    });
})(jQuery, window.encoder, window.filesize);
