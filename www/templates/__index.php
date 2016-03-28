<?php
  if (isset($_GET['page_name'])) {
      createNewPage($_GET['page_name']);
      header('Refresh:0; url=/');
  }

  $pages = glob('www/templates/pages/*.php');
  $real_list = array();
  foreach ($pages as $page) {
      $text = preg_match('/templates\/pages\/([a-z-]+)\.php/', $page, $match);
      if (!empty($match[1])) {
          $real_list[] = $match[1];
      }
  }
?>
<link rel="stylesheet" href="/docs/css/theme.css" />

<div class="all-pages-wrap fadeIn">
  <section class="template-wrap">
    <div class="container-center">
      <div class="container">
        <div class="header-star-wars clearfix">
          <h1 class="pull-left fadeInLeft animated">&#60;	/ Front-End &#62;</h1>
          <a href="/docs" class="btn-star-wars"><i class="fa fa-empire"></i> Style Guide</a>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="teal-block fadeInUp animated1">
              <h1 class="black-title"><span>La liste des pages :</span></h1>
              <ul class="double-arrow-list list-unstyled">
                <?php foreach ($real_list as $elem): ?>
                  <li><a href="/?page=<?=$elem?>"><span><?= ucfirst(str_replace('-', ' ', $elem)) ?></span></a></li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="teal-block fadeInUp animated2">
              <h1 class="black-title"><span>Créer une nouvelle page :</span></h1>
              <form class="form-inline">
                <label for="input-page-name" style="font-weight:normal"><span>Nom de la page :</span></label>
                <input class="form-control" type="text" name="page_name" id="input-page-name"/>
                <button class="btn btn-primary">OK</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
