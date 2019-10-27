import { fill } from 'component/string';

const leadingZeros = (num, leading=2) => fill(num.toString(), '0', leading, false);

export {
    leadingZeros,
};
