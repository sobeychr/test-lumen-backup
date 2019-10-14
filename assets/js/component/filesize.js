const _config = {
    round: 2,

    b: 1,
    kb: 1024,
    mb: Math.pow(1024, 2),
    gb: Math.pow(1024, 3),
};

const bToKb = size => size / _config.kb;
const bToMb = size => size / _config.mb;
const bToGb = size => size / _config.gb;

const round = num => num.toFixed(_config.round);
const pretty = size => {

    const gb = bToGb(size);
    if(gb > 1) {
        return round(gb) + ' GB';
    }
    const mb = bToMb(size);
    if(mb > 1) {
        return round(mb) + ' MB';
    }
    return round(bToKb(size)) + ' KB';
};

export {
    bToKb,
    bToMb,
    bToGb,
    pretty,
};
