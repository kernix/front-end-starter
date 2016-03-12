<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Style Guide</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <link rel="stylesheet" href="/../../../css/bootstrap.min.css" />
  <link rel="stylesheet" href="/../../../css/bootstrap-theme.min.css" />
  <link rel="stylesheet" href="/../../../css/font-awesome.min.css" />
  <link rel="stylesheet" href="/../../../css/theme.css" />
  <script src="/../../../js/all.js"></script>
  <script src="/../../../js/main.js"></script>

  <script src="https://cdn.jsdelivr.net/jquery.smoothstate/0.7.2/jquery.smoothState.min.js" charset="utf-8"></script>
  <script src="functions.js"></script>

  <style>
    /* Common styles for all menus */

    .menu {
      line-height: 1;
      margin: 0 auto 3em;
    }

    .menu__list {
      position: relative;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .menu__item {
      display: block;
      margin: 1em 0;
    }

    .menu__link {
      font-size: 1.05em;
      font-weight: bold;
      display: block;
      padding: 1em;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .menu__link:hover,
    .menu__link:focus {
      outline: none;
    }

    .menu--ferdinand .menu__link {
      position: relative;
      display: block;
      margin: 0 1.5em;
      padding: 0.65em 0;
      text-align: center;
      color: #b5b5b5;
      -webkit-transition: background 0.3s, color 0.3s;
      transition: background 0.3s, color 0.3s;
    }

    .menu--ferdinand .menu__link:hover,
    .menu--ferdinand .menu__link:focus {
      color: #929292;
      text-decoration: none;
    }
.menu--ferdinand .menu__item:hover .menu__link,
    .menu--ferdinand .menu__item--current .menu__link {
      color: #d94f5c;
      text-decoration: none;
    }

    .menu--ferdinand .menu__link::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #d94f5c;
      -webkit-transform: scale3d(0, 5, 1);
      transform: scale3d(0, 5, 1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      -webkit-transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
      transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
    }

    .menu--ferdinand .menu__item--current .menu__link::before ,.menu--ferdinand .menu__item:hover .menu__link::before {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  </style>
</head>

<body>
  <div class="header-wrap-style-guide">
    <a href="/" class="new-era"><i class="fa fa-empire"></i></a>
    <h2>Style Guide</h2>
  </div>
