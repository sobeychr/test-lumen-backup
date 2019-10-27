<?php

namespace App\Http\Controllers\page;

use App\Configs\IndexConfig;
use App\Http\Controllers\page\BasePageController;

class IndexController extends BasePageController
{
    protected $viewName = 'index';

    protected function viewData():array
    {
        return [
            'links' => IndexConfig::LINKS,
        ];
    }
}
