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
  <!--<meta name="viewport" content="initial-scale=1, user-scalable=no, maximum-scale=1">-->
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <?php endif; ?>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="description" content="<?=$site->desc?>">
  <!-- Styles -->
  <link rel="stylesheet" href="/public/css/theme.css" />
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="57x57" href="/public/img/favicons/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="/public/img/favicons/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/public/img/favicons/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/public/img/favicons/apple-touch-icon-76x76.png" />
  <link rel="icon" type="image/png" href="/public/img/favicons/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/public/img/favicons/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="/public/img/favicons/favicon-16x16.png" sizes="16x16" />
  <link rel="manifest" href="/public/img/favicons/manifest.json" />
  <link rel="mask-icon" href="/public/img/favicons/safari-pinned-tab.svg" color="#5bbad5" />
  <link rel="shortcut icon" href="/public/img/favicons/favicon.ico" />
  <meta name="msapplication-TileColor" content="#2b5797" />
  <meta name="msapplication-config" content="/public/img/favicons/browserconfig.xml" />
  <meta name="theme-color" content="#ffffff" />
</head>
<body class="page-<?=isset($page) ? ($page == 'home' ? 'home' : $page.' not-home') : 'template'?>">
<?php
include 'www/templates/_header.php';
include $include;
include 'www/templates/_footer.php';
?>
  <script src="/public/vendor/jquery/dist/jquery.min.js"></script>
  <script src="/public/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="/public/vendor/moment/moment.js"></script>
  <script src="/public/vendor/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
  <script src="/public/vendor/jquery-placeholder/jquery.placeholder.min.js"></script>
  <script src="/public/vendor/sweetalert/dist/sweetalert.min.js"></script>
  <script src="/public/js/custom-file-input.js"></script>
  <script src="/public/js/bundle.js"></script>
</body>
</html>
