<?php

$_data = grindXML('data.xml');
$carousel = $_data->carousel->item;

?>

<?php if($carousel): ?>
<div id="carousel" class="carousel slide carousel-home" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <?php $i=0; foreach($carousel as $c): ?>
      <li data-target="#carousel" data-slide-to="<?=$i?>" class="<?=$i==0?'active':''?>"></li>
    <?php $i++; endforeach; ?>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
  <?php $i=0; foreach($carousel as $c): ?>
    <div class="item <?=$i==0?'active':''?>" style="background-image:url('<?=$c->imageSrc?>')">
      <img src="<?=$c->imageSrc?>">
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

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<?php else: ?>
  <pre>
    Aucune donnée définie pour le carousel.<br/>
    <i class="fa fa-warning"></i> Il faut soit un élément <span style="color:white; background:black">&lt;carousel&gt;</span> dans le fichier data.xml
  </pre>
<?php endif; ?>
