<li>
    @isset($button['on'])
        @component('component.parser-button-button', array_merge($button, [
            'class' => 'on',
            'label' => $button['on'],
        ]))
        @endcomponent
    @endisset
    @isset($button['off'])
        @component('component.parser-button-button', array_merge($button, [
            'class' => 'off',
            'label' => $button['off'],
        ]))
        @endcomponent
    @endisset
</li>
