<section class="search-head-section">
    <!-- Breadcrumb -->
    <div class="default-alt-section breadcrumb-section">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Résultat de recherche</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="search-head-form">
      <div class="container container-md">
        <div class="search-form">
            <form role="search" method="get" id="searchform">
                <div class="form-group">
                    <label for="searchFormInputField">Rechercher</label>
                    <input type="text" value="" name="s" id="searchFormInputField" class="form-control form-md-control" placeholder=""> 
                </div>
                <button class="btn btn-submit-search" type="submit"><i class="icon-arrow-right"></i><span class="visually-hidden">Rechercher</span></button>
            </form>
        </div>
        <div class="search-result-text">
            <strong>26</strong> résultats de recherche pour <strong>« design »</strong>
        </div>
      </div>
    </div>
</section>

<section class="search-result-section">
    <div class="container container-md">
        <ul class="search-result-list list-unstyled">
            <?php for($i=0; $i<10; $i++): ?>
                <li>
                    <a href="" class="search-item">
                        <h2 class="search-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                        <div class="search-text cms-content">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.</div>
                        <div class="search-date">04.02.2023</div>
                    </a>
                </li>
            <?php endfor; ?>
        </ul>

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
                <li class="page-item"><a class="page-link" href="#">3</a></li>
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