<?php

namespace App\Configs;

class ParserConfig extends BaseConfig
{
    const BUTTONS = [
        [
            'cut' => 'B64',
            'long' => 'Base64',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'cut' => 'CC',
            'long' => 'CharCode',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'cut' => 'Enc',
            'long' => 'Encoding',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'cut' => 'JS',
            'long' => 'Json',
            'on' => 'pretty',
            'off' => 'minified',
        ],
    ];
}
