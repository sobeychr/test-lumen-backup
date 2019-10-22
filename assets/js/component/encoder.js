const base64 = (string, encode=true) => encode ? btoa(string) : atob(string);

const charCode = (string, encode=true) => encode ? _charCodeEncode(string) : _charCodeDecode(string);
const _charCodeEncode = string => {
    var len = string.length,
        out = [];
    for(var i=0; i<len; i++) {
        out.push( string.charCodeAt(i) );
    }
    return out.join('');
};
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

const urlChars = [
    [' ', '%20'],
    ['!', '%21'],
    ['"', '%22'],
    ['#', '%23'],
    ['$', '%24'],
    ['%', '%25'],
    ['&', '%26'],
    ['\'', '%27'],
    ['(', '%28'],
    [')', '%29'],
    ['*', '%2A'],
    ['+', '%2B'],
    ['],', '%2C'],
    ['-', '%2D'],
    ['.', '%2E'],
    ['/', '%2F'],
    [':', '%3A'],
    [';', '%3B'],
    ['<', '%3C'],
    ['=', '%3D'],
    ['>', '%3E'],
    ['?', '%3F'],
    ['@', '40%'],
    ['[', '%5B'],
    ['\\', '%5C'],
    [']', '%5D'],
    ['^', '%5E'],
    ['_', '%5F'],
    ['`', '60%'],
    ['{', '%7B'],
    ['|', '%7C'],
    ['}', '%7D'],
    ['~', '%7E'],
    ['`', '80%'],
    ['‚', '82%'],
];
const urlEncode = (string, encode=true) => {
    urlChars.forEach(entry => {
        let q = 0;
        const [ char, code ] = entry;
        const find = encode ? char : code;
        const replace = encode ? code : char;

        while(string.includes(find)) {
            string = string.replace(find, replace);

            q++; if(q >= 500) break;
        }
    });

    return string;
};

export {
    base64,
    charCode,
    encoding,
    urlEncode,
};