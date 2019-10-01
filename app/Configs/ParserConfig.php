<?php

namespace App\Configs;

class ParserConfig extends BaseConfig
{
    const BUTTONS = [
        [
            'active' => true,
            'action' => 'base64',
            'cut' => 'B64',
            'long' => 'Base64',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'active' => true,
            'action' => 'charcode',
            'cut' => 'CC',
            'long' => 'CharCode',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'active' => false,
            'action' => 'encoding',
            'cut' => 'Enc',
            'long' => 'Encoding',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'active' => true,
            'action' => 'json',
            'cut' => 'JS',
            'long' => 'Json',
            'on' => 'pretty',
            'off' => 'minified',
        ],
        [
            'active' => true,
            'action' => 'favorite',
            'cut' => 'Fav',
            'long' => 'Favorites',
            'on' => 'find',
        ],
    ];
}
