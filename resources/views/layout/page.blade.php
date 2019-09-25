<html>
    @php
        $time = time();
    @endphp
    <head>
        <title>LocalLumen - {{$name}}</title>
        <link rel='icon' href='assets/images/icons/{{$name}}.png' type='image/png'/>
        <link rel='shortcut icon' href='assets/images/icons/{{$name}}.png' type='image/png'/>
        <link rel='stylesheet' type='text/css' href='assets/css/{{$name}}.css#{{$time}}'/>
        <script src='assets/js/{{$name}}.js#{{$time}}'></script>
    </head>
    <body>
        <header>
            @yield('header')
        </header>
        <main>
            @yield('main')
        </main>
        <footer>
            @yield('footer')
        </footer>
    </body>
</html>