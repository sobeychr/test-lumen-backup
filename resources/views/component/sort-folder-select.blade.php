<fieldset>
    <legend>{{$legend}}</legend>
    <ul id='{{$listName}}' class='folder-select'>
        @foreach($entries as $value=>$entry)
            <li
                @if($loop->first)
                    class='selected'
                @endif
            >
                <label>
                    <span>{{$entry}}</span>
                    <input type='hidden' name='{{$listName}}-{{$value}}' value='{{$entry}}' />
                    <input type='radio' name='{{$listName}}' value='{{$value}}'
                        @if($loop->first)
                            checked
                        @endif
                    />
                </label>
            </li>
        @endforeach
    </ul>
</fieldset>
