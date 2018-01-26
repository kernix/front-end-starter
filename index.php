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
  <?php if ($is_responsive): ?>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <?php endif; ?>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="description" content="<?=$site->desc?>">
  <!-- Styles -->
  <!-- <link rel="stylesheet" href="dist/vendor/font-awesome/css/font-awesome.min.css"> -->
  <link rel="stylesheet" href="dist/css/theme.min.css">
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="57x57" href="dist/img/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="dist/img/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="dist/img/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="dist/img/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="dist/img/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="dist/img/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="dist/img/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="dist/img/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="dist/img/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="dist/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="dist/img/favicons/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="16x16" href="dist/img/favicons/favicon-16x16.png">
  <link rel="manifest" href="dist/img/favicons/manifest.json">
  <link rel="mask-icon" href="dist/img/favicons/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut icon" href="dist/img/favicons/favicon.ico">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="dist/img/favicons/mstile-144x144.png">
  <meta name="msapplication-config" content="dist/img/favicons/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">
</head>
<body class="page-<?=isset($page) ? ($page == 'home' ? 'home' : $page.' not-home') : 'template'?>">
  <?php
  include 'www/templates/_header.php';
  include $include;
  include 'www/templates/_footer.php';
  ?>
  <script src="dist/vendor/jquery/dist/jquery.min.js"></script>
  <!-- <script src="dist/vendor/moment/min/moment.min.js"></script>
  <script src="dist/vendor/moment/min/moment.min.js"></script>
  <script src="dist/vendor/moment/locale/fr.js"></script> -->
  <script src="dist/vendor/popper.js/dist/umd/popper.min.js"></script>
  <script src="dist/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
  <!-- <script src="dist/vendor/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script> -->
  <script src="dist/vendor/hammerjs/hammer.min.js"></script>
  <script src="dist/js/main.min.js"></script>
</body>
</html>
