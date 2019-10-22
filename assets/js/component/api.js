import $ from 'jquery';

const logDone = (path, done, data) => {
    console.log('%cLoading done', 'color:#33a3ff;', path);
    done(data);
};
const logFail = (path, err) => {
    console.error('Loading failed', path, err);
};

const get = (path, done) => {
    $.get(path)
        .done(data => logDone(path, done, data))
        .fail(err => logFail(path, err));
};

export {
    get,
};
