<?php

namespace App\Http\Controllers\page;

use App\Configs\ParserConfig;
use App\Http\Controllers\page\BasePageController;

class ParserController extends BasePageController
{
    protected $hasJquery = true;
    protected $hasJs = true;

    protected $viewName = 'parser';

    protected function viewData():array
    {
        $buttons = array_filter(ParserConfig::BUTTONS, function($entry) {
            return isset($entry['active']) && $entry['active'] === true;
        });
        return [
            'buttons' => $buttons,
        ];
    }
}
