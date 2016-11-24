<footer class="footer-wrap" role="contentinfo">
  <div class="container">

    <!-- Navigation footer links -->
    <?php if ($menus->footer): ?>
      <nav class="nav-footer" aria-label="Liens du site">
        <ul class="list-unstyled list-inline">
        <?php $i = 0; foreach ($menus->footer->item as $m): ?>
          <li>
            <a class="menu-item" href="<?= $m->url != '' ? $m->url : 'javascript:void(0)' ?>" role="menuitem"><?=$m->label?></a>
          </li>
        <?php ++$i; endforeach; ?>
        </ul>
      </nav>
    <?php endif; ?>

    <a id="back-to-top" href="#"><span class="sr-only">Retour en haut </span></a>
  </div>
</footer>
