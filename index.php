<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Niels van Deursen</title>
  <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet/less" type="text/css" href="assets/css/nivade.less" />
  <script src="assets/vendor/jquery/jquery.min.js" type="text/javascript"></script>
  <script src="assets/vendor/less/less.min.js" type="text/javascript"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="assets/vendor/angular/angular.min.js" type="text/javascript"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" type="text/javascript"></script>
  <script src="assets/js/cbpAnimatedHeader.js" type="text/javascript"></script>
  <script src="assets/js/classie.js" type="text/javascript"></script>
  <script src="assets/js/freelancer.js" type="text/javascript"></script>
  <script src="assets/js/modules.js" type="text/javascript"></script>
</head>

<body id="page-top" class="index">

  <nav class="navbar navbar-custom navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#page-top"></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden"><a href="#page-top"></a></li>
          <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
          <li class="page-scroll"><a href="#about">About</a></li>
          <li class="page-scroll"><a href="#contact">Contact</a></li>
        </ul>
      </div> <!-- /.navbar-collapse -->
    </div> <!-- /.container-fluid -->
  </nav>

  <!-- Header -->
  <!-- Intro Header -->
  <header class="intro">
    <div class="intro-body">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h1 class="brand-heading">Nelson</h1>
            <i class="page-scroll">
              <a href="#portfolio">
                <i class="btn btn-circle "><i class="fa fa-angle-double-down"></i></i>
              </a>
            </i>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Portfolio Grid Section -->
  <section id="portfolio" ng-app="search">
    <div class="container" ng-controller="search-controller">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Portfolio</h2>
          <hr>
          <input type="search" ng-model="search" placeholder="Search...">
          <hr>
        </div>
      </div>
      <div class="row">

        <div class="col-sm-4 portfolio-item" ng-repeat="item in items | filter:filterBySearch">
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="caption">
              <div class="caption-content">
                  {{ item.title }}
                  <i class="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img src="assets/img/{{item.image}}" class="img-responsive">
          </a>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="text-center">
    <div class="footer-above">
      <div class="container">
        <div class="row">
          <div class="footer-col col-md-4">
            <h3>Location</h3>
            <p>Google Maps Be here</p>
          </div>
          <div class="footer-col col-md-4">
            <h3>I do social</h3>
            <ul class="list-inline">
              <li>
                <a href="https://www.facebook.com/niels.vandeursen" class="btn-social btn-outline"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://plus.google.com/104656186078129765941/posts" class="btn-social btn-outline"><i class="fa fa-google-plus"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/niels-van-deursen-81748b1b" class="btn-social btn-outline"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="https://github.com/Nivade/" class="btn-social btn-outline"><i class="fa fa-github"></i></a>
              </li>
            </ul>
          </div>
          <div class="footer-col col-md-4">
            <h3>Right</h3>
            <p>At the moment I have fuck all of a clue what to put here.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-below">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            Copyright &copy; Niels van Deursen 2016
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>

</html>
