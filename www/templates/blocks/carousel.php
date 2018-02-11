<?php
$_data = grindXML('www/data.xml');
$carousel = $_data->carousel->item;
?>

<?php if($carousel): ?>
<div id="carousel" class="carousel carousel-home slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <?php $i=0; foreach($carousel as $c): ?>
      <li data-target="#carousel" data-slide-to="<?=$i?>" class="<?=$i==0?'active':''?>"></li>
    <?php $i++; endforeach; ?>
  </ol>
  <div class="carousel-inner">
  <?php $i=0; foreach($carousel as $c): ?>
    <div class="carousel-item <?=$i==0?'active':''?>" style="background-image:url('<?=$c->imageSrc?>')">
      <div class="container">
        <div class="carousel-caption">
          <h2><?=$c->title?></h2>
          <p><?=$c->desc?></p>
          <a href="<?=$c->link->url?>" class="btn btn-white"><?=$c->link->label?></a>
        </div>
      </div>
      <?php if($c->htmlData != ''): ?>
        <?=(string)$c->htmlData?>
      <?php endif; ?>
    </div>
  <?php $i++; endforeach; ?>
  </div>

  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
   </a>
</div>
<?php else: ?>
  <pre>
    Aucune donnée définie pour le carousel.<br/>
    <i class="fa fa-warning"></i> Il faut soit un élément <span style="color:white; background:black">&lt;carousel&gt;</span> dans le fichier data.xml
  </pre>
<?php endif; ?>
