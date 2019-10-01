<?php

namespace App\Configs;

class ParserConfig extends BaseConfig
{
    const BUTTONS = [
        [
            'action' => 'base64',
            'cut' => 'B64',
            'long' => 'Base64',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'action' => 'charcode',
            'cut' => 'CC',
            'long' => 'CharCode',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'action' => 'encoding',
            'cut' => 'Enc',
            'long' => 'Encoding',
            'on' => 'on',
            'off' => 'off',
        ],
        [
            'action' => 'json',
            'cut' => 'JS',
            'long' => 'Json',
            'on' => 'pretty',
            'off' => 'minified',
        ],
    ];
}
