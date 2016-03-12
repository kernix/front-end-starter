<?php
  if (isset($_GET['page_name'])) {
      createNewPage($_GET['page_name']);
      header('Refresh:0; url=/');
  }

  $pages = glob('templates/pages/*.php');
  $real_list = array();
  foreach ($pages as $page) {
      $text = preg_match('/templates\/pages\/([a-z-]+)\.php/', $page, $match);
      if (!empty($match[1])) {
          $real_list[] = $match[1];
      }
  }
?>
<div class="container">
  <br/><br/><br/><br/><br/><br/><pre>No template selected.</pre>
  <section class="teal-block">
  <h1 class="black-title"><span>La liste des pages :</span></h1>
  <br/>
  <ul class="double-arrow-list list-unstyled" style="max-width:200px">
    <?php foreach ($real_list as $elem): ?>
      <li><a href="/?page=<?=$elem?>"><span><?= ucfirst(str_replace('-', ' ', $elem)) ?></span></a></li>
    <?php endforeach; ?>
  </ul>
  </section>
  <section class="teal-block">
  <h1 class="black-title"><span>Star Wars:</span></h1>
  <br>
  <ul class="double-arrow-list list-unstyled" style="max-width:200px">
      <li><a href="/templates/style-guide"><span>Style Guide</span></a></li>

  </ul>
  </section>
  <br/>
  <section class="teal-block">
    <h1 class="black-title"><span>Créer une nouvelle page :</span></h1>
    <form class="form-inline">
      <label for="input-page-name" style="font-weight:normal"><span>Nom de la page :</span></label>
      <input class="form-control" type="text" name="page_name" id="input-page-name"/>
      <button class="btn btn-primary">OK</button>
    </form>
  </section>
  <br/><br/><br/><br/><br/>
</div>
