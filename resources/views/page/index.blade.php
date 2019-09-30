@extends('layout.page')

@section('main')
    <nav>
        @each('component.index-link', $links, 'link')
    </nav>
@endsection
