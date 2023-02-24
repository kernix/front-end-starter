<?php
$_data = grindXML('www/data.xml');
$carousel = $_data->carousel->item;
?>

<?php if($carousel): ?>
<div id="carousel" class="carousel carousel-home slide" data-bs-ride="true">
  <ol class="carousel-indicators">
    <?php $i=0; foreach($carousel as $c): ?>
      <li data-bs-target="#carousel" data-bs-slide-to="<?=$i?>" class="<?=$i==0?'active':''?>" aria-current="<?=$i==0?'true':'false'?>"></li>
    <?php $i++; endforeach; ?>
  </ol>
  <div class="carousel-inner">
  <?php $i=0; foreach($carousel as $c): ?>
    <div class="carousel-item <?=$i==0?'active':''?>" style="background-image:url('<?=$c->imageSrc?>')">
      <div class="container">
        <div class="carousel-caption">
          <h2><?=$c->title?></h2>
          <p><?=$c->desc?></p>
          <a href="<?=$c->link->url?>" class="btn btn-primary"><?=$c->link->label?></a>
        </div>
      </div>
      <?php if($c->htmlData != ''): ?>
        <?=(string)$c->htmlData?>
      <?php endif; ?>
    </div>
  <?php $i++; endforeach; ?>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<?php else: ?>
  <pre>
    Aucune donnée définie pour le carousel.<br/>
    Il faut soit un élément <span style="color:white; background:black">&lt;carousel&gt;</span> dans le fichier data.xml
  </pre>
<?php endif; ?>
