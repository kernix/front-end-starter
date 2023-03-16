<footer class="footer-wrap" role="contentinfo">
  <div class="container">

    <section class="logo-section">
      <!-- Logo -->
      <a href="/?page=home" class="footer-logo">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTYwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRTZFNkU2Ii8+CjxwYXRoIGQ9Ik05Mi44MzMzIDM3LjgzMzNINjcuMTY2N1YxMi4xNjY3SDkyLjgzMzNNOTIuODMzMyA4LjVINjcuMTY2N0M2Ni4xOTQyIDguNSA2NS4yNjE2IDguODg2MzEgNjQuNTczOSA5LjU3Mzk0QzYzLjg4NjMgMTAuMjYxNiA2My41IDExLjE5NDIgNjMuNSAxMi4xNjY3VjM3LjgzMzNDNjMuNSAzOC44MDU4IDYzLjg4NjMgMzkuNzM4NCA2NC41NzM5IDQwLjQyNjFDNjUuMjYxNiA0MS4xMTM3IDY2LjE5NDIgNDEuNSA2Ny4xNjY3IDQxLjVIOTIuODMzM0M5My44MDU4IDQxLjUgOTQuNzM4NCA0MS4xMTM3IDk1LjQyNjEgNDAuNDI2MUM5Ni4xMTM3IDM5LjczODQgOTYuNSAzOC44MDU4IDk2LjUgMzcuODMzM1YxMi4xNjY3Qzk2LjUgMTEuMTk0MiA5Ni4xMTM3IDEwLjI2MTYgOTUuNDI2MSA5LjU3Mzk0Qzk0LjczODQgOC44ODYzMSA5My44MDU4IDguNSA5Mi44MzMzIDguNVpNODMuNTkzMyAyNS41MzE3TDc4LjU1MTcgMzIuMDIxN0w3NC45NTgzIDI3LjY5NUw2OS45MTY3IDM0LjE2NjdIOTAuMDgzM0w4My41OTMzIDI1LjUzMTdaIiBmaWxsPSIjODA4MDgwIi8+CjxlbGxpcHNlIGN4PSI4Ni40MTY3IiBjeT0iMTguNTgzMyIgcng9IjIuNzUiIHJ5PSIyLjc1IiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPgo=" alt=""/>
        <span class="visually-hidden">Accueil</span>
      </a>

      <!-- Socials Desktop -->
      <nav class="socials-nav d-none d-sm-block">
        <ul class="list-unstyled">
          <li class="list-inline-item">
            <a href="" target="_blank"><i class="icon-youtube"></i><span class="visually-hidden">Youtube</span></a>
          </li>
          <li class="list-inline-item">
            <a href="" target="_blank"><i class="icon-twitter"></i><span class="visually-hidden">Twitter</span></a>
          </li>
          <li class="list-inline-item">
            <a href="" target="_blank"><i class="icon-instagram"></i><span class="visually-hidden">Instagram</span></a>
          </li>
          <li class="list-inline-item">
            <a href="" target="_blank"><i class="icon-facebook"></i><span class="visually-hidden">Facebook</span></a>
          </li>
          <li class="list-inline-item">
            <a href="" target="_blank"><i class="icon-linkedin"></i><span class="visually-hidden">LinkedIn</span></a>
          </li>
        </ul>
      </nav>
    </section>

    <!-- Nav -->
    <section class="footer-nav-section">
      <div class="row">
        <?php for ($i = 0; $i < 4; $i++): ?>
          <div class="col-sm-3">
            <nav class="footer-nav">
              <h2 class="footer-nav-title">Text</h2>
              <ul class="list-unstyled">
                <?php for ($j = 0; $j < 4; $j++): ?>
                  <li>
                    <a class="menu-item" href="">Text</a>
                  </li>
                <?php endfor; ?>
              </ul>
            </nav>
          </div>
        <?php endfor; ?>
      </div>
    </section>

    <!-- Socials Mobile -->
    <nav class="socials-nav d-block d-sm-none">
      <ul class="list-unstyled">
        <li class="list-inline-item">
          <a href="" target="_blank"><i class="icon-youtube"></i><span class="visually-hidden">Youtube</span></a>
        </li>
        <li class="list-inline-item">
          <a href="" target="_blank"><i class="icon-twitter"></i><span class="visually-hidden">Twitter</span></a>
        </li>
        <li class="list-inline-item">
          <a href="" target="_blank"><i class="icon-instagram"></i><span class="visually-hidden">Instagram</span></a>
        </li>
        <li class="list-inline-item">
          <a href="" target="_blank"><i class="icon-facebook"></i><span class="visually-hidden">Facebook</span></a>
        </li>
        <li class="list-inline-item">
          <a href="" target="_blank"><i class="icon-linkedin"></i><span class="visually-hidden">LinkedIn</span></a>
        </li>
      </ul>
    </nav>

    <!-- Copyright -->
    <div class="copyright-text">© <?= date("Y") ?> Lorem ipsum - Tous droits réservés</div>
    
    <!-- Back to top -->
    <a id="back-to-top" href="#"><span class="visually-hidden">Retour en haut </span></a>
  </div>
</footer>
