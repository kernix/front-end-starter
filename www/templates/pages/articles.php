<!-- Articles -->

<div class="articles-wrap">
    <section class="articles-section">
        <div class="default-alt-section breadcrumb-section">
            <div class="container">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Actualités</li>
                </ol>
                </nav>
            </div>
        </div>
        
        <div class="container">
            <h1 class="articles-title">Actualités</h1>

                <div class="articles-row row">
                    <?php $currentPage=1; $i=1; for($j=0; $j < 13; $j++):?>
                        <div class="<?php if($i == 1 && $currentPage == 1) : ?>col-sm-12 col-hightlight<?php else: ?>col-md-4 col-sm-6<?php endif; ?>">
                            <a href="#" target="_self" class="default-card <?php if($i == 1 && $currentPage == 1) : ?>default-hightlight-card<?php endif; ?>">
                                <div class="default-card-img-block">
                                    <div class="default-card-img" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI4NCIgdmlld0JveD0iMCAwIDM4MCAyODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iMjg0IiBmaWxsPSIjRTZFNkU2Ii8+CjxwYXRoIGQ9Ik0yMDIuODMzIDE1NC44MzNIMTc3LjE2N1YxMjkuMTY3SDIwMi44MzNNMjAyLjgzMyAxMjUuNUgxNzcuMTY3QzE3Ni4xOTQgMTI1LjUgMTc1LjI2MiAxMjUuODg2IDE3NC41NzQgMTI2LjU3NEMxNzMuODg2IDEyNy4yNjIgMTczLjUgMTI4LjE5NCAxNzMuNSAxMjkuMTY3VjE1NC44MzNDMTczLjUgMTU1LjgwNiAxNzMuODg2IDE1Ni43MzggMTc0LjU3NCAxNTcuNDI2QzE3NS4yNjIgMTU4LjExNCAxNzYuMTk0IDE1OC41IDE3Ny4xNjcgMTU4LjVIMjAyLjgzM0MyMDMuODA2IDE1OC41IDIwNC43MzggMTU4LjExNCAyMDUuNDI2IDE1Ny40MjZDMjA2LjExNCAxNTYuNzM4IDIwNi41IDE1NS44MDYgMjA2LjUgMTU0LjgzM1YxMjkuMTY3QzIwNi41IDEyOC4xOTQgMjA2LjExNCAxMjcuMjYyIDIwNS40MjYgMTI2LjU3NEMyMDQuNzM4IDEyNS44ODYgMjAzLjgwNiAxMjUuNSAyMDIuODMzIDEyNS41Wk0xOTMuNTkzIDE0Mi41MzJMMTg4LjU1MiAxNDkuMDIyTDE4NC45NTggMTQ0LjY5NUwxNzkuOTE3IDE1MS4xNjdIMjAwLjA4M0wxOTMuNTkzIDE0Mi41MzJaIiBmaWxsPSIjODA4MDgwIi8+CjxlbGxpcHNlIGN4PSIxOTYuNDE3IiBjeT0iMTM1LjU4MyIgcng9IjIuNzUiIHJ5PSIyLjc1IiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPgo=');"></div>
                                </div>
                                <?php if($i == 1 && $currentPage == 1) : ?>
                                    <div class="default-card-content">
                                <?php endif; ?>
                                    <div class="default-tag">Test</div> 
                                    <h3 class="default-card-title">Article lorem</h3>
                                    <?php if($i == 1 && $currentPage == 1) : ?>
                                        <div class="default-card-text cms-content">
                                        <!-- Flexible content blocks -->
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione corrupti voluptates, distinctio quo obcaecati temporibus expedita ab, consequuntur velit fuga molestiae nihil exercitationem asperiores reprehenderit non debitis itaque rerum quaerat.
                                        </div>
                                    <?php endif; ?>        
                                    <div class="default-card-subtitle">23.06.2023</div>
                                <?php if($i == 1 && $currentPage == 1) : ?>
                                    </div>
                                <?php endif; ?>     
                            </a>
                        </div>
                    <?php $i++; endfor; ?>

            <nav class="pagination-nav" aria-label="Navigation résultat de recherche">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link page-prev" href="#">
                            <i class="icon-arrow-left"></i>
                            <span class="visually-hidden">Précédent</span>
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><span class="page-link dots">...</span></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link page-next" href="#" aria-label="Next">
                            <i class="icon-arrow-right"></i>
                            <span class="visually-hidden">Suivant</span>
                        </a>
                    </li>
                </ul>
            </nav> 
        </div>
    </section>
</div>