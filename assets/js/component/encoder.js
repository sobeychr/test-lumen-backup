(function($, undefined){
    'use strict';

    window.encoder = (function() {

        var base64 = function(string, encode) {
            if(typeof encode === 'undefined') encode = true;
            return encode ? btoa(string) : atob(string);
        };

        var charCode = function(string, encode) {
            if(typeof encode === 'undefined') encode = true;
            return encode ? _charCodeEncode(string) : _charCodeDecode(string);
        };
        var _charCodeEncode = function(string) {
            var len = string.length,
                out = [];
            for(var i=0; i<len; i++) {
                out.push( string.charCodeAt(i) );
            }
            return out.join('');
        }
        var _charCodeDecode = function(string) {
            var len = string.length,
                num = '',
                j = 3,
                out = [];

            for(var i=0; i<len; i+=j) {
                num = parseInt(string.substr(i, j));
                j = num > 255 ? 2 : 3;
                num = parseInt(string.substr(i, j));
                out.push( String.fromCharCode(num) );
            }

            return out.join('');
        };

        var encoding = function(string, encode) {
            return string;
        };

        var json = function(string, encode) {
            if(typeof encode === 'undefined') encode = true;
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

            return typeof json === 'object'
                ? JSON.stringify(json, null, encode ? 4 : 0)
                : '! invalid';
        }

        return {
            base64: base64,
            charcode: charCode,
            encoding: encoding,
            json: json,
        };
    })();
})(jQuery);
