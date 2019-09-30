<?php

namespace App\Http\Controllers\page;

use Laravel\Lumen\Routing\Controller as BaseController;

class BasePageController extends BaseController
{
    protected $hasJquery = false;
    protected $hasJs = false;

    protected $name = '';

    public function main():string
    {
        $this->beforeView();

        $viewData = array_merge([
            'hasJquery' => $this->hasJquery,
            'hasJs' => $this->hasJs,
            'name' => $this->name,
        ], $this->viewData());

        $view = view('page.'.$this->name, $viewData);

        $this->afterView();

        return $view;
    }

    protected function viewData():array
    {
        return [];
    }

    protected function beforeView():void
    {

    }

    protected function afterView():void
    {

    }
}
