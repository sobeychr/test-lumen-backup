<?php

namespace App\Http\Controllers\page;

use App\Configs\ParserConfig;
use App\Http\Controllers\page\BasePageController;

class ParserController extends BasePageController
{
    protected $hasJquery = true;
    protected $hasJs = true;

    protected $name = 'parser';

    protected function viewData():array
    {
        return [
            'buttons' => ParserConfig::BUTTONS,
        ];
    }
}
