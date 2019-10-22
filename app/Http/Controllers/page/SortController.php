<?php

namespace App\Http\Controllers\page;

use App\Configs\SortConfig;
use App\Http\Controllers\page\BasePageController;

class SortController extends BasePageController
{
    protected $hasJs = true;
    protected $name = 'sort';

    protected function viewData():array
    {
        return [
            'category' => SortConfig::CATEGORY,
            'folder' => SortConfig::FOLDER,
            'order' => SortConfig::ORDER,
        ];
    }
}
