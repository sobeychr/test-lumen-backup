const base64 = (string, encode=true) => encode ? btoa(string) : atob(string);

const charCode = (string, encode=true) => encode ? _charCodeEncode(string) : _charCodeDecode(string);
const _charCodeEncode = string => {
    var len = string.length,
        out = [];
    for(var i=0; i<len; i++) {
        out.push( string.charCodeAt(i) );
    }
    return out.join('');
}
const _charCodeDecode = (string) => {
    var len = string.length,
        num = '',
        i = 0,
        j = 3,
        out = [];

    for(i=0; i<len; i+=j) {
        j = 3;
        num = parseInt(string.substr(i, j));
        if(num > 255) {
            j = 2;
            num = parseInt(string.substr(i, j));
        }
        out.push( String.fromCharCode(num) );
    }

    return out.join('');
};

const encoding = (string, encode=true) => string;

export {
    base64,
    charCode,
    encoding,
};