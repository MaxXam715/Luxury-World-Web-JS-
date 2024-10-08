<?php
global $version;
$root = $_SERVER['DOCUMENT_ROOT'];
require_once $root . '/backend/template.php';
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Luxury World</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="version" content="<?= $version ?>">

    <!-- meta -->
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="" />
    <meta property="og:title" content=""/>
    <meta property="og:image" content="/assets/img/logo-banner.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="" />
    <meta name="twitter:title" content="">
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="/assets/img/logo-banner.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="vk:image" content="/assets/img/logo-banner.jpg" />
    <meta name="description" content="" />
    <meta property="og:url" content="" />
    <meta property="article:author" content="Luxury World" />
    <meta property="article:publisher" content="Luxury World" />
    <link rel="image_src" href="/assets/img/logo-banner.jpg">

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/static/favicon/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="128x128" href="/static/favicon/favicon-128x128.png">
    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#222222">
    <meta name="msapplication-TileColor" content="#222222">
    <meta name="theme-color" content="#222222">

    <!-- Style -->
    <link rel="stylesheet" href="/css/global.css?v=<?= $version ?>">
</head>
<body>

<main id="app" style="opacity: 1;"></main>

<script src="/plugins/Swiper/swiper.min.js"></script>
<script src="/plugins/imask/imask.js"></script>

<script src="/js/Helpers.js?v=<?= $version ?>"></script>
<script src="/js/scripts.js?v=<?= $version ?>"></script>
<script src="/js/router.js?v=<?= $version ?>"></script>

</body>
</html>