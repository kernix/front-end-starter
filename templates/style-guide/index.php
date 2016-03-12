<?php include '_header.php'; ?>

  <div id="main" class="m-scene">
    <!-- Navigation -->
    <div class="container">

      <nav class="menu menu--ferdinand">
        <ul class="menu__list">
          <li class="menu__item menu__item--current"><a href="index.php" class="menu__link">CSS </a></li>
          <li class="menu__item"><a href="javascript.php" class="menu__link">Javascript</a></li>
        </ul>
      </nav>
    </div>
    <hr>

    <div class="scene_element scene_element--fadein">
      <!-- style guide -->

      <div class="main-wrap-style-guide">
        <div class="container">
          <h1 class="page-header">Button</h1>

          <div class="row">
            <div class="style-guide-row clearfix">
              <div class="col-sm-12">
                <h3>Button</h3>
                <button type="" class="btn">btn</button>
                <button type="" class="btn btn-primary">btn btn-primary </button>
                <button type="" class="btn btn-secondary">btn btn-secondary </button>
                <button type="" class="btn btn-tertiary">btn btn-tertiary </button>
              </div>

              <div class="col-sm-12">
                <h3>Button link</h3>
                <a href="" class="link">btn</a>
                <a href="" class="btn">btn</a>
                <a href="" class="btn btn-primary">btn btn-primary </a>
                <a href="" class="btn btn-secondary">btn btn-secondary </a>
                <a href="" class="btn btn-tertiary">btn btn-tertiary </a>
              </div>

            </div>

            <div class="style-guide-row clearfix">
              <div class="col-sm-6">
                <h3>Input</h3>
                <div> .form-control</div>
                <input type="text" name="" value="" class="form-control" placeholder="input text">
                <h3>Textarea</h3>
                <div> .form-control</div>
                <textarea name="" class="form-control"></textarea>
              </div>

              <div class="col-sm-6">
                <h3>Checkboxes and radios</h3>
                <form>
                  <div class="form-radio">
                    <input type="radio" name="radio[]" value="" id="radio">
                    <label for="radio"><span class="icon"></span> Titre </label>
                  </div>
                  <div class="form-radio">
                    <input type="radio" name="radio[]" value="" id="radio1">
                    <label for="radio1"><span class="icon"></span> Titre 1</label>
                  </div>
                </form>
                <form>
                  <div class="form-checkbox">
                    <input type="checkbox" name="" value="" placeholder="" id="checkbox">
                    <label for="checkbox"><span class="icon"></span> Titre </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="style-guide-row clearfix">
              <div class="col-sm-6">
                <h3>Select</h3>
                <div class="form-select">
                  <select name="" class="form-control">
                    <option value="">Text</option>
                    <option value="">Text</option>
                    <option value="">Text</option>
                    <option value="">Text</option>
                  </select>
                </div>
              </div>

            </div>
            <div class="style-guide-row clearfix">
              <div class="col-sm-6">
                <h3>Formulaire</h3>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <input type="file" name="file-7[]" id="file-7" class="inputfile inputfile-6" data-multiple-caption="{count} files selected" multiple="">
                    <label for="file-7"><span></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> Sélect. fichiers</strong></label>
                  </div>
                  <div class="checkbox">
                    <div class="form-checkbox">
                      <input type="checkbox" name="" value="" placeholder="" id="checkbox2">
                      <label for="checkbox2"><span class="icon"></span> Check me out </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              </div>


              <div class="col-sm-6">
                <h3>Datepicker</h3>
                <div class="datetime">
                  <input type="text" class="form-control">
                </div>
                <div class="form-group">
                  <div id="datetimepickerinline"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="style-guide-row clearfix">
            <div class="cms">
              <div class="col-sm-6">
                <h3>Titre</h3>
                <h1>Titre h1</h1>
                <h2>Titre h2</h2>
                <h3>Titre h3</h3>
                <h4>Titre h4</h4>
                <h5>Titre h5</h5>
              </div>
              <div class="col-sm-6">
                <h3>Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas odio veniam exercitationem cumque inventore asperiores, eaque hic fugit iusto sit sed culpa, ullam pariatur ipsum, voluptate? Et quis dolorem, libero.</p>
              </div>
              <div class="col-sm-6">
                <h3>Liste</h3>
                <ul>
                  <li>list
                    <ul>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                    </ul>
                  </li>
                  <li>list</li>
                  <li>list</li>
                  <li>list</li>
                </ul>
                <ol>
                  <li>list
                    <ul>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                    </ul>
                  </li>
                  <li>list</li>
                  <li>list</li>
                  <li>list</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="style-guide-row clearfix">
            <h3>Table</h3>
            <table class="table">
              <caption>table title and/or explanatory text</caption>
              <thead>
                <tr>
                  <th>header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <?php include '_footer.php'; ?>
