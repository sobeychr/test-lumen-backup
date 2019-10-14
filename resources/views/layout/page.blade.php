<html>
    @php
        $time = time();
    @endphp
    <head>
        <title>LocalLumen - {{$name}}</title>
        <link rel='icon' href='assets/images/icons/{{$name}}.png' type='image/png'/>
        <link rel='shortcut icon' href='assets/images/icons/{{$name}}.png' type='image/png'/>
        <link rel='stylesheet' type='text/css' href='assets/css/{{$name}}.css#{{$time}}'/>
        @if($hasJs)
            <script src='assets/js/{{$name}}.js#{{$time}}'></script>
        @endif
    </head>
    <body>
        @hasSection('header')
            <header>
                @yield('header')
            </header>
        @endif
        @hasSection('aside')
            <aside>
                <button class='aside__button'></button>
                @yield('aside')
            </aside>
        @endif
        @hasSection('main')
            <main>
                @yield('main')
            </main>
        @endif
        @hasSection('footer')
            <footer>
                @yield('footer')
            </footer>
        @endif
    </body>
</html>