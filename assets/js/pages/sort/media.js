import $ from 'jquery';
import { isImage } from 'component/file';

const classEmpty = 'none';
const classOff = 'off';

const empty = () => {
    $('#popup .media img, #popup .media video').removeAttr('src').addClass(classEmpty);
    $('#popup').addClass(classOff);
};

const load = path => {
    const isImg = isImage(path);
    const hide = $(isImg ? '#popup .media video' : '#popup .media img');
    const show = $(isImg ? '#popup .media img' : '#popup .media video');
    hide.removeAttr('src').addClass(classEmpty);
    show.attr('src', path).removeClass(classEmpty);
    $('#popup').removeClass(classOff);
};

export {
    empty,
    load,
};
