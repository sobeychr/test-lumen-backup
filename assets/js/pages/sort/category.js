import $ from 'jquery';

const bound = () => {
    $(document).on('keyup', onKeyup);
};


const onKeyup = e => {
    if(e.key === 'Delete') {
        console.log('deleted');
    }
};

export {
    bound,
};
