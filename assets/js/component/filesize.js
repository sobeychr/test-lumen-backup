(function($, undefined){
    'use strict';

    window.filesize = (function() {

        var _config = {
            round: 100,

            b: 1,
            kb: 1024,
            mb: Math.pow(1024, 2),
            gb: Math.pow(1024, 3),
        };

        var round = function(num) { return Math.round(num * _config.round) / _config.round; };

        var bToKb = function(size){ return size / _config.kb; }
        var bToMb = function(size){ return size / _config.mb; }
        var bToGb = function(size){ return size / _config.gb; }

        var pretty = function(size) {
            var gb = bToGb(size);
            if(gb > 1) {
                return round(gb) + ' GB';
            }
            var mb = bToMb(size);
            if(mb > 1) {
                return round(mb) + ' MB';
            }
            return round(bToKb(size)) + ' KB';
        }

        return {
            bToKb: bToKb,
            bToMb: bToMb,
            bToGb: bToGb,
            pretty: pretty,
        };
    })();
})();
