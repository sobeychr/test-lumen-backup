import $ from 'jquery';
import { get } from 'api';
import { getDateTime } from 'date';
import { replaceAll } from 'string';

(function($, doc, undefined) {
    'use strict';

    const sort = (function() {

        const _configs = {
            selFolder: '.folder-select li',
            selFolderClass: 'selected',
            selUpdateList: 'input[name="folder"], input[name="order"]',

            load: {
                selFolder: 'input[name="folder"]',
                selOrder: 'input[name="order"]',
            },

            populate: {
                selTemplate: '#listing .template:first',
            },
        };

        const init = () => {
            bound();
            onUpdateList();
        };

        const bound = () => {
            $(doc).on('click', _configs.selFolder, onSelectFolder);
            $(doc).on('change', _configs.selUpdateList, onUpdateList);
        };

        const loadStart = () => {
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
                html = replaceAll(html, '{name}', name);
                html = replaceAll(html, '{path}', folderPath + name);
                html = replaceAll(html, '{timestamp}', date);

                // console.log('html', html);
                $('#listing').append(html);
            });
        };

        const onSelectFolder = (e) => {
            const $ctarget = $(e.currentTarget);
            if(!$ctarget.hasClass(_configs.selFolderClass)) {
                $ctarget.siblings('.' + _configs.selFolderClass).removeClass(_configs.selFolderClass);
                $ctarget.addClass(_configs.selFolderClass);
            }
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
