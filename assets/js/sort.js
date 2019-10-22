import $ from 'jquery';
import { get } from 'api';
import { getDateTime } from 'date';
import { cut, replaceAll } from 'string';

(function($, doc, undefined) {
    'use strict';

    const sort = (function() {

        const _configs = {
            selClass: 'selected',

            selFolder: '.folder-select li',
            selUpdateList: 'input[name="folder"], input[name="order"]',

            load: {
                selFolder: 'input[name="folder"]:checked',
                selOrder: 'input[name="order"]:checked',
            },

            populate: {
                listing: '#listing',
                maxName: 21,
                selList: '#listing li:not(.template)',
                selTemplate: '#listing .template:first',
            },
        };

        const init = () => {
            $(doc).on('click', _configs.selFolder, onSelectFolder);
            $(doc).on('change', _configs.selUpdateList, onUpdateList);
            onUpdateList();
        };

        const boundList = (bound=true) => {
            if(bound) {
                $(doc).on('click', _configs.populate.selList, onSelectList);
            }
            else {
                $(doc).off('click', _configs.populate.selList);
            }
        };

        const loadStart = () => {
            boundList(false);
            $(_configs.populate.selList).remove();
            const folder = $(_configs.load.selFolder).val();
            const order = $(_configs.load.selOrder).val();
            const path = 'api/sort/list/' + folder + '/' + order;
            get(path, loadEnd);
        };

        const loadEnd = (data) => {
            // console.log('[sort]', '[loadEnd]', data);

            const folder = $(_configs.load.selFolder).val();
            const folderPath = $('input[name="folder-' + folder + '"]').val();
            const template = $(_configs.populate.selTemplate).clone();
            template.removeClass('template');

            const { files } = data;
            files.forEach((entry, key) => {
                const { date, name } = entry;
                
                let html = template[0].outerHTML.toString();
                html = replaceAll(html, '{date}', getDateTime(date));
                html = replaceAll(html, '{key}', key);
                html = replaceAll(html, '{fullname}', name);
                html = replaceAll(html, '{name}', cut(name, _configs.populate.maxName));
                html = replaceAll(html, '{path}', folderPath + name);
                html = replaceAll(html, '{timestamp}', date);

                // console.log('html', html);
                $(_configs.populate.listing).append(html);
                boundList();
            });
        };

        const onSelectFolder = (e) => {
            const $ctarget = $(e.currentTarget);
            if(!$ctarget.hasClass(_configs.selClass)) {
                $ctarget.siblings().removeClass(_configs.selClass);
                $ctarget.addClass(_configs.selClass);
            }
        };

        const onSelectList = (e) => {

        };

        const onUpdateList = () => {
            loadStart();
        };

        return {
            init,
        };
    })();

    $(function(){
        sort.init();
    });
})($, document);
