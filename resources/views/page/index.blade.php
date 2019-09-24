@extends('layout.page')

@section('main')
    <nav>
        @each('component.index-link', $links, 'name')
    </nav>
@endsection