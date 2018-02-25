<header class="header-wrap" role="banner">
  <div class="container">
    <!-- Logo -->
    <a href="/?page=home" class="header-logo">
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDgwIDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0wLDE2djU2bDE2LTE2VjBMMCwxNnogTTgwLDE2SDU2TDE2LDU2bDQwLDQwaDI0TDQwLDU2TDgwLDE2eiIvPjwvZz48L3N2Zz4=" alt="">
      <span class="sr-only">Accueil</span>
    </a>

    <!-- Nav principale avec attributs WAI -->
    <?php if($menus->main): ?>
    <nav class="main-nav" role="navigation" aria-label="Navigation principale">
        <ul class="list-inline" role="menubar">
          <?php $i = 0; foreach($menus->main->item as $m): ?>
          <li role="presentation" class="list-inline-item">
            <a class="menu-item" id="main-nav-item-<?=$i?>" href="<?= $m->url != '' ? $m->url : 'javascript:void(0)' ?>" <?=$m->submenu ? 'aria-haspopup="true"' : '' ?> <?php if ($m->submenu) : ?>aria-controls="main-subnav-<?=$i?>" <?php endif; ?>><?=$m->label?></a>

            <?php if($m->submenu): ?>
              <ul class="list-inline" id="main-subnav-<?=$i?>" role="menu" aria-labelledby="main-nav-item-<?=$i?>">
                <?php $j = 0; foreach($m->submenu->item as $sm): ?>
                  <li role="none" class="list-inline-item">
                    <a role="menuitem" class="sub-menu-item" href="<?= $sm->url != '' ? $sm->url : 'javascript:void(0)' ?>" ><?=$sm->label?></a>
                  </li>
                <?php $j++; endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
          <?php $i++; endforeach; ?>
        </ul>
    </nav>
    <?php endif; ?>
  </div>
</header>
