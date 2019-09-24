<?php

namespace App\Http\Controllers\page;

use Laravel\Lumen\Routing\Controller as BaseController;

class BasePageController extends BaseController
{
    protected $name = '';

    public function main():string
    {
        $this->beforeView();

        $viewData = $this->viewData();
        if(!isset($viewData['name'])) {
            $viewData['name'] = $this->name;
        }

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
