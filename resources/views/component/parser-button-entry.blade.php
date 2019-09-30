<li>
    @isset($button['on'])
        @component('component.parser-button-button', array_merge($button, ['class' => 'on']))
        @endcomponent
    @endisset
    @isset($button['off'])
        @component('component.parser-button-button', array_merge($button, ['class' => 'off']))
        @endcomponent
    @endisset
</li>
