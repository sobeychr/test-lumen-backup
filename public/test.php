<html>
    <head>
        <title>htaccess - index</title>
    </head>
    <body>
        <h1>test</h1>
<?php
$server = $_SERVER;
ksort($server);
echo var_dump($server, true);
?>
    </body>
</html>