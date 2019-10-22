@extends('layout.page')

@section('main')
    <h1>Sorting downloads</h1>

    <form action='' method='post'>
        @component('component.sort-folder-select', [
                'entries' => $folder,
                'first' => true,
                'legend' => 'List Folder',
                'listName' => 'folder',
            ])
        @endcomponent
        @component('component.sort-folder-select', [
                'entries' => $order,
                'first' => true,
                'legend' => 'Order',
                'listName' => 'order',
            ])
        @endcomponent
    </form>

    <div>
        <ul id='listing'>
            <li class='template'>
                <span class='name'>{name}</span>
                <span class='date'>{date}</span>
                <input type='hidden' class='date' value='{timestamp}'/>
                <input type='hidden' class='name' value='{fullname}'/>
                <input type='hidden' class='path' value='{path}'/>
            </li>
        </ul>

        @component('component.sort-folder-select', [
                'entries' => $category,
                'first' => false,
                'legend' => 'Category',
                'listName' => 'category',
            ])
        @endcomponent

        <div id='popup' class='off'>
            <video width='480' height='320' autoplay controls loop src=''/>
        </div>
    </div>
@endsection
