import $ from 'jquery';
import { getDateTime } from 'component/date';
import { cut, replaceAll } from 'component/string';
import { load } from 'pages/sort/media';

const classSelected = 'selected';
const keys = ['ArrowLeft', 'ArrowRight'];
const liBounds = '#listing li:not(.template)';
const maxLength = 21;

const bound = () => {
    $(document).on('keyup', onKeyup);
};

const empty = () => {
    $(liBounds).off('click');
    $(liBounds).remove();
};

const populate = data => {
    const folder = $('input[name="folder"]:checked').val();
    const folderPath = $('input[name="folder-' + folder + '"]').val();
    const template = $('#listing li.template:first').clone();
    template.removeClass('template');

    const { files } = data;
    files.forEach((entry, key) => {
        const { date, name } = entry;
        
        let html = template[0].outerHTML.toString();
        html = replaceAll(html, '{date}', getDateTime(date));
        html = replaceAll(html, '{key}', key);
        html = replaceAll(html, '{fullname}', name);
        html = replaceAll(html, '{name}', cut(name, maxLength));
        html = replaceAll(html, '{path}', folderPath + name);
        html = replaceAll(html, '{timestamp}', date);

        $('#listing').append(html);
    });
    $(liBounds).on('click', onClick);
};

const onClick = e => {
    const $li = $(e.currentTarget);
    if(!$li.hasClass(classSelected)) {
        $li.siblings().removeClass(classSelected);
        $li.addClass(classSelected);
        load( $li.find('.path:first').val() );
    }
};

const onKeyup = e => {
    const { key } = e;
    if(keys.includes(key)) {
        let $li = $(liBounds + '.' + classSelected);
        if($li.length === 0) {
            $li = $(liBounds + ':first').trigger('click');
        }
        else {
            if(key === keys[0]) $li.prev().trigger('click');
            else if(key === keys[1]) $li.next().trigger('click');
        }
    }
};

export {
    bound,
    empty,
    populate,
};
