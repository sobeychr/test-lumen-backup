import $ from 'jquery';
import { get } from 'api';
import { getDateTime } from 'date';
import { cut, replaceAll } from 'string';
import { isImage } from 'file';

(function($, doc, undefined) {
    'use strict';

    const sort = (function() {

        const _configs = {
            apiPath: 'api/sort/list/{folder}/{order}',
            checked: ':checked',
            selClass: 'selected',

            category: {
                selButton: 'input[name="category"]',
            },

            load: {
                selFolder: 'input[name="folder"]',
                selOrder: 'input[name="order"]',
            },

            populate: {
                listing: '#listing',
                maxName: 21,
                selList: '#listing li:not(.template)',
                selPath: '.path:first',
                selTemplate: '#listing .template:first',
            },

            video: {
                selContainer: '#popup',
                selImage: '#popup img',
                selVideo: '#popup video',
            },
        };
        _configs.load.selUpdateList = [
            _configs.load.selFolder,
            _configs.load.selOrder,
        ].join(',');

        let _sorts = [];

        const init = () => {
            $(doc).on('change', _configs.load.selUpdateList, onUpdateList);
            onUpdateList(null);
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
            const folder = $(_configs.load.selFolder + _configs.checked).val();
            const order = $(_configs.load.selOrder + _configs.checked).val();
            const path = _configs.apiPath.replace('{folder}', folder).replace('{order}', order);
            get(path, loadEnd);
        };

        const loadEnd = (data) => {
            const folder = $(_configs.load.selFolder + _configs.checked).val();
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

                $(_configs.populate.listing).append(html);
            });
            boundList();
            setMedia(false);
        };

        const setMedia = fullpath => {
            if(!fullpath) {
                $(_configs.video.selImage).removeAttr('src').addClass('none');
                $(_configs.video.selVideo).removeAttr('src').addClass('none');
                return;
            }

            const show = isImage(fullpath) ? _configs.video.selImage : _configs.video.selVideo;
            const hide = isImage(fullpath) ? _configs.video.selVideo : _configs.video.selImage;

            $(_configs.video.selContainer).removeClass('off');
            $(show).attr('src', fullpath).removeClass('none');
            $(hide).removeAttr('src').addClass('none');
        };

        const onSelectList = (e) => {
            const $ctarget = $(e.currentTarget);
            if(!$ctarget.hasClass(_configs.selClass)) {
                $ctarget.siblings().removeClass(_configs.selClass);
                $ctarget.addClass(_configs.selClass);
                setMedia($ctarget.find(_configs.populate.selPath).val());
            }
        };

        const onUpdateList = (e) => {
            if(!e) {
                loadStart();
                return;
            }

            const $parent = $(e.currentTarget).parents('li:first');
            if(!$parent.hasClass(_configs.selClass)) {
                $parent.siblings().removeClass(_configs.selClass);
                $parent.addClass(_configs.selClass);
                loadStart();
            }
        };

        return {
            init,
        };
    })();

    $(function(){
        sort.init();
    });
})($, document);
