import { fillString } from 'string';

const leadingZeros = (num, leading=2) => fillString(num.toString(), '0', leading, false);

export {
    leadingZeros,
};
