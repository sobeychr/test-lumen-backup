<?php

namespace App\Configs;

class SortConfig extends BaseConfig
{
    const CATEGORY = ['9gag', 'bj', 'cam', 'casting', 'college', 'flashing', 'full', 'hj', 'massage', 'misc', 'names'];

    const FOLDER = [
        '/downloads/',
        '/downloads/videos/',
    ];

    const DEST = 'E:/Videos/zzzweb/';

    const ORDER = ['date asc', 'date desc', 'name asc', 'name desc'];
}
