@extends('layout.page')

@section('aside')
    <ul>
        @each('component.parser-button-entry', $buttons, 'button')
    </ul>
@endsection

@section('main')
    <textarea id='in' placeholder='// input content'></textarea>
    <hr/>
    <pre id='out'></pre>
@endsection
