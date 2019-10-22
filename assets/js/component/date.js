import { leadingZeros } from 'number';

const newDate = timestamp => {
    const d = new Date();
    d.setUTCMilliseconds(timestamp);
    return d;
}

const getDate = timestamp => {
    const d = newDate(timestamp);
    return [
        leadingZeros(d.getFullYear(), 4),
        leadingZeros(d.getMonth(), 2),
        leadingZeros(d.getDate(), 2),
    ].join('-');
};

const getDateTime = timestamp => getDate(timestamp) + 'T' + getTime(timestamp);

const getTime = timestamp => {
    const d = newDate(timestamp);
    return [
        leadingZeros(d.getHours(), 2),
        leadingZeros(d.getMinutes(), 2),
        leadingZeros(d.getSeconds(), 2),
    ].join(':');
};

export {
    getDate,
    getDateTime,
    getTime,
};
