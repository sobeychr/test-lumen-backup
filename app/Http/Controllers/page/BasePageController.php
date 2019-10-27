<?php

namespace App\Http\Controllers\page;

use Laravel\Lumen\Routing\Controller as BaseController;

class BasePageController extends BaseController
{
    protected $hasJquery = false;
    protected $hasJs = false;

    protected $viewName = '';

    public function main():string
    {
        $this->beforeView();

        $viewData = array_merge([
            'hasJs' => $this->hasJs,
            'viewName' => $this->viewName,
        ], $this->viewData());

        $view = view('page.'.$this->viewName, $viewData);

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
