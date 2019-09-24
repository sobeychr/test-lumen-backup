<html>
    @php
        $time = time();
    @endphp
    <head>
        <title>LocalLumen - {{$name}}</title>
        <link rel='icon' href='images/icon/{{$name}}.png' type='image/png'/>
        <link rel='shortcut icon' href='images/icon/{{$name}}.png' type='image/png'/>
        <link rel='stylesheet' type='text/css' href='css/{{$name}}.css#{{$time}}'/>
        <script src='js/{{$name}}.js#{{$time}}'></script>
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