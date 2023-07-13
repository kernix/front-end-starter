<header class="header-wrap" role="banner">
  <div class="container container-xl">
    <!-- Logo -->
    <a href="/" class="header-logo">
      <img class="auto-img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTYwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRTZFNkU2Ii8+CjxwYXRoIGQ9Ik05Mi44MzMzIDM3LjgzMzNINjcuMTY2N1YxMi4xNjY3SDkyLjgzMzNNOTIuODMzMyA4LjVINjcuMTY2N0M2Ni4xOTQyIDguNSA2NS4yNjE2IDguODg2MzEgNjQuNTczOSA5LjU3Mzk0QzYzLjg4NjMgMTAuMjYxNiA2My41IDExLjE5NDIgNjMuNSAxMi4xNjY3VjM3LjgzMzNDNjMuNSAzOC44MDU4IDYzLjg4NjMgMzkuNzM4NCA2NC41NzM5IDQwLjQyNjFDNjUuMjYxNiA0MS4xMTM3IDY2LjE5NDIgNDEuNSA2Ny4xNjY3IDQxLjVIOTIuODMzM0M5My44MDU4IDQxLjUgOTQuNzM4NCA0MS4xMTM3IDk1LjQyNjEgNDAuNDI2MUM5Ni4xMTM3IDM5LjczODQgOTYuNSAzOC44MDU4IDk2LjUgMzcuODMzM1YxMi4xNjY3Qzk2LjUgMTEuMTk0MiA5Ni4xMTM3IDEwLjI2MTYgOTUuNDI2MSA5LjU3Mzk0Qzk0LjczODQgOC44ODYzMSA5My44MDU4IDguNSA5Mi44MzMzIDguNVpNODMuNTkzMyAyNS41MzE3TDc4LjU1MTcgMzIuMDIxN0w3NC45NTgzIDI3LjY5NUw2OS45MTY3IDM0LjE2NjdIOTAuMDgzM0w4My41OTMzIDI1LjUzMTdaIiBmaWxsPSIjODA4MDgwIi8+CjxlbGxpcHNlIGN4PSI4Ni40MTY3IiBjeT0iMTguNTgzMyIgcng9IjIuNzUiIHJ5PSIyLjc1IiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPgo=" alt="" height="50px" width="100px"/>
      <span class="visually-hidden">Accueil</span>
    </a>

    <div class="header-block">
      <!-- Nav principale avec attributs WAI -->
      <span class="visually-hidden btn-back-text">Retour</span>
      <nav class="header-nav" role="navigation">
        <ul>
        <?php for ($i = 1; $i < 6; $i++): ?>
          <li class="menu-item-has-children">
            <a href="javascript:void(0)">Text <?=$i?></a>
            <ul>
              <?php for ($j = 0; $j < 4; $j++): ?>
                <li>
                  <a href="/?page=layout">Lien direct</a>
                </li>
              <?php endfor; ?>
            </ul>
          </li>
          <?php endfor; ?>
        </ul>
      </nav>

      <!-- Dropdow language -->
      <div class="dropdown language-dropdown d-block d-lg-none">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Français
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Anglais</a></li>
          <li><a class="dropdown-item" href="#">Espagnol</a></li>
          <li><a class="dropdown-item" href="#">Allemand</a></li>
        </ul>
      </div>
    </div>
    
    <div class="header-col-right">
      <!-- Btn Search -->
      <button type="button" class="btn btn-link btn-search btn-toggle-search">
        <i class="icon-search"></i><span class="visually-hidden">Recherche</span>
      </button>

      <!-- Btn Menu -->
      <button type="button" class="btn btn-link btn-menu">
        <span class="menu"></span><span class="visually-hidden">Menu</span>
      </button>
      
      <!-- Dropdow language -->
      <div class="dropdown language-dropdown d-none d-lg-block">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Français
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Anglais</a></li>
          <li><a class="dropdown-item" href="#">Espagnol</a></li>
          <li><a class="dropdown-item" href="#">Allemand</a></li>
        </ul>
      </div>
    </div>

    <!-- Search Form -->
    <div class="header-search-form">
      <div class="container">
        <button type="button" class="btn btn-link btn-toggle-search btn-close-search">
          Fermer <i class="icon-close"></i>
        </button>
        <div class="clearfix"></div>
        <div class="search-form">
            <form role="search" method="get" id="searchform">
            <div class="form-group">
                <label for="searchFormInputField">Rechercher</label>
                <input type="text" value="" name="s" id="searchFormInputField" class="form-control form-md-control" placeholder=""> 
            </div>
            <button class="btn btn-submit-search" type="submit"><i class="icon-arrow-right"></i><span class="visually-hidden">Rechercher</span></button>
            </form>
        </div>
      </div>
    </div> 
    <div class="header-search-overlay btn-toggle-search"></div>
  </div>
</header>
