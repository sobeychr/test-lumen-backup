import $ from 'jquery';
import { get } from 'component/api';
import { empty as emptyList, populate } from 'pages/sort/list';
import { empty as emptyMedia } from 'pages/sort/media';

const classSelected = 'selected';

const bound = () => {
    $('#load input[type="radio"]').on('change', onChange);
};

const onChange = e => {
    const $input = $(e.currentTarget);
    const $li = $input.parents('li:first');
    if(!$li.hasClass(classSelected)) {
        $li.siblings().removeClass(classSelected);
        $li.addClass(classSelected);
        loadStart();
    }
};

const loadStart = () => {
    emptyList();
    emptyMedia();
    const folder = $('input[name="folder"]:checked').val();
    const order = $('input[name="order"]:checked').val();
    const path = 'api/sort/list/' + folder + '/' + order;
    get(path, loadEnd);
};

const loadEnd = data => populate(data);

export {
    bound,
    loadStart,
};
