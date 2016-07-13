<header class="header-wrap" role="banner">
  <div class="container">
    <a href="/?page=home"><span class="sr-only">Accueil</span></a>
    <!-- Nav principale avec attributs WAI -->
    <?php if($menus->main): ?>
    <nav class="main-nav" role="navigation" aria-label="Navigation principale">
        <ul class="list-unstyled list-inline" role="menubar">
          <?php $i = 0; foreach($menus->main->item as $m): ?>
          <li role="presentation">
            <a class="menu-item" id="main-nav-item-<?=$i?>" href="<?= $m->url != '' ? $m->url : 'javascript:void(0)' ?>" role="menuitem" <?=$m->submenu ? 'aria-haspopup="true"' : '' ?>><?=$m->label?></a>
            <?php if($m->submenu): ?>
              <ul class="sub-menu-1 list-unstyled" role="menu" aria-expanded="false" aria-labelledby="main-nav-item-<?=$i?>">
                <?php foreach($m->submenu->item as $sm): ?>
                  <li role="presentation">
                    <a class="sub-menu-item" href="<?= $sm->url != '' ? $sm->url : 'javascript:void(0)' ?>" role="menuitem"><?=$sm->label?></a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
          <?php $i++; endforeach; ?>
        </ul>
    </nav>
    <?php endif; ?>
  </div><div class="container">
  <div class="row">
  <div class="col-sm-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.m</div>
  </div>
  <div class="col-lg-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.m</div>
  </div>
</header>
