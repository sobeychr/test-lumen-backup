<?php

namespace App\Http\Controllers\api;

use \DirectoryIterator;
use App\Configs\SortConfig;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\JsonResponse;

class SortController extends BaseController
{
    const KEY_DATE = 'date';
    const KEY_NAME = 'name';

    const MAX = 75;

    protected $asc = true;
    protected $sortDate = true;

    public function list(int $folder=0, int $order=0):JsonResponse
    {
        $folderStr = SortConfig::FOLDER[$folder];

        $this->asc = $order === 0 || $order === 2;
        $this->sortDate = $order === 0 || $order === 1;

        $files = [];
        foreach(new DirectoryIterator($folderStr) as $file)
        {
            if($file->isDir()) continue;
            $files[] = [
                self::KEY_DATE => $file->getMTime(),
                self::KEY_NAME => $file->getFilename(),
            ];
        }
        $total = count($files);
        $files = array_slice($files, 0, min($total, self::MAX));
        usort($files, [$this, 'sortField']);
        
        return response()->json([
            'folder' => $folder,
            'order' => $order,
            'asc' => $this->asc,
            'sortDate' => $this->sortDate,
            'total' => $total,
            'count' => count($files),
            'files' => $files,
        ], 200);
    }

    public function test():JsonResponse
    {
        $t = time();

        return response()->json([
            'testing' => 1,
            't' => $t,
        ], 200);
    }

    protected function sortAsc(int $val):int
    {
        return $this->asc ? $val : ($val * -1);
    }

    protected function sortField(array $a, array $b):int
    {
        return $this->sortDate
            ? $this->sortAsc( $a[self::KEY_DATE] > $b[self::KEY_DATE] )
            : $this->sortAsc( strcmp($a[self::KEY_NAME], $b[self::KEY_NAME]) );
    }
}
