<footer class="main-footer" role="contentinfo">

  <!-- Navigation footer links -->
  <?php if ($menus->footer): ?>
    <nav class="quick-links" aria-label="Liens du site">
      <div class="container">
      <?php $i = 0; foreach ($menus->footer->item as $m): ?>
        <a class="menu-item" href="<?= $m->url != '' ? $m->url : 'javascript:void(0)' ?>" role="menuitem"><?=$m->label?></a>
      <?php ++$i; endforeach; ?>
      </div>
    </nav>
  <?php endif; ?>

  <a id="back-to-top" href="#"><span class="sr-only">Retour en haut</span></a>
</footer>
