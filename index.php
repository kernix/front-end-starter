<?php
include 'www/functions.php';
$data = grindXML('www/data.xml', true);
$site = $settings->site;
$is_responsive = (bool) (string) $site->isResponsive;
if (isset($_GET['page']) && file_exists('www/templates/pages/'.$_GET['page'].'.php')) {
    $page = $_GET['page'];
}
$include = isset($page) ? 'www/templates/pages/'.$page.'.php' : 'www/templates/__index.php';
?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title><?=$site->title?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="description" content="<?=$site->desc?>">

  <!-- Styles -->
  <link rel="stylesheet" href="dist/css/main.min.css">

  <!-- Cookie -->
  <?php include 'www/templates/blocks/cookie.php'; ?>

  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="60x60" href="dist/img/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="76x76" href="dist/img/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="dist/img/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="dist/img/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="dist/img/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="dist/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="dist/img/favicons/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="16x16" href="dist/img/favicons/favicon-16x16.png">
  <link rel="mask-icon" href="dist/img/favicons/safari-pinned-tab.svg" color="#003cff">
  <link rel="shortcut icon" href="dist/img/favicons/favicon.ico">
  <meta name="apple-mobile-web-app-title" content="Kernix">
  <meta name="application-name" content="Kernix">
  <meta name="msapplication-TileColor" content="#003cff">
  <meta name="msapplication-TileImage" content="dist/img/favicons/mstile-144x144.png">
  <meta name="msapplication-config" content="dist/img/favicons/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">

  
</head>
<body class="page-<?=isset($page) ? ($page == 'home' ? 'home' : $page.' not-home') : 'template'?>">

  <!-- Header -->
  <?php include 'www/templates/_header.php'; ?>

  <!-- Main -->
  <main id="content">
    <?php include $include; ?>
  </main>

  <!-- Footer -->
  <?php include 'www/templates/_footer.php'; ?>

  <!-- Scripts -->
  <script src="dist/js/main.min.js" defer></script>
</body>
</html>
