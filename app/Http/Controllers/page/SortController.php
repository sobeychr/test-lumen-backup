<?php

namespace App\Http\Controllers\page;

use \DirectoryIterator;
use App\Configs\SortConfig;
use App\Http\Controllers\page\BasePageController;

class SortController extends BasePageController
{
    const DEST_NAMES = SortConfig::DEST . 'names/';
    const REG_NAMES = '/^(\-?[a-z])+/';

    protected $hasJs = true;
    protected $viewName = 'sort';

    protected function viewData():array
    {
        return [
            'category' => SortConfig::CATEGORY,
            'folder' => SortConfig::FOLDER,
            'names' => $this->loadNames(),
            'order' => SortConfig::ORDER,
        ];
    }

    private function loadNames():array
    {
        $folderStr = self::DEST_NAMES;

        $names = [];
        foreach(new DirectoryIterator($folderStr) as $file)
        {
            if($file->isDir()) continue;
            $filename = strtolower($file->getFilename());
            preg_match(self::REG_NAMES, $filename, $match);
            $name = $match[0] ?? '';
            if($name && !in_array($name, $names)) {
                $names[] = $name;
            }
        }

        return $names;
    }
}
