@extends('layout.page')

@section('main')
    <h1>Sorting downloads</h1>

    <form action='' method='post'>
        @component('component.sort-folder-select', [
                'legend' => 'List Folder',
                'listName' => 'folder',
                'entries' => $folder,
            ])
        @endcomponent
        @component('component.sort-folder-select', [
                'legend' => 'Order',
                'listName' => 'order',
                'entries' => $order,
            ])
        @endcomponent
    </form>

    <ul id='listing'>
        <li class='template'>
            <span class='name'>{name}</span>
            <span class='date'>{date}</span>
            <input type='hidden' name='date-{key}' value='{timestamp}'/>
            <input type='hidden' name='name-{key}' value='{name}'/>
            <input type='hidden' name='path-{key}' value='{path}'/>
        </li>
    </ul>

    <div id='popup' class='off'>
        <video width='480' height='320' controls>
            <source src='' type=''/>
        </video>
    </div>
@endsection
