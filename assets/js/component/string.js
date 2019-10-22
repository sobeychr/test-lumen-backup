const cut = (string, length, cut='...') => {
    if(string.length < length) return string;
    return string.substring(0, length - cut.length) + cut;
};

const fill = (string, fill, length=2, append=true) => {
    let q = 0;
    while(string.length < length) {
        string = append ? string + fill : fill + string;
        q++; if(q>=500) {
            console.error('[component/string]', '[fillString]', 'overload when filling string', {
                append,
                fill,
                length,
                stringLength: string.length,
                string,
            });
            break;
        }
    }
    return string;
};

const replaceAll = (string, find, replace) => {
    let q = 0;
    while(string.includes(find)) {
        string = string.replace(find, replace);
        q++; if(q>=500) {
            console.error('[component/string]', '[replaceAll]', 'overload when replacing string', {
                find,
                replace,
                string,
            });
            break;
        }
    }
    return string;
};

export {
    cut,
    fill,
    replaceAll,
};
