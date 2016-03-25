<header class="header-wrap" role="banner">
  <div class="container">
    <a href="/?page=home"><span class="sr-only">Accueil</span></a>
    <!-- Nav principale avec attributs WAI -->
    <?php if($menus->main): ?>
    <nav class="main-nav" role="navigation" aria-label="Navigation principale">
        <ul class="list-unstyled" role="menubar">
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
  </div>
</header>
