
function partOne(level) {
  return '<div class="container">\
  <div class="row">\
      <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">\
          <div class="site-branding d-flex align-items-center">\
              <a class="d-block" href="' + level + 'index.html" rel="home"><img class="d-block" src="' + level + 'images/logo150.png"\
                      alt="logo"></a>\
          </div><!-- .site-branding -->\
          <nav class="site-navigation d-flex justify-content-end align-items-center">\
              <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">';
}
const PART2 =

  '</ul>\
          </nav>\
          <div class="hamburger-menu d-lg-none">\
              <span></span>\
              <span></span>\
              <span></span>\
              <span></span>\
          </div>\
      </div>\
  </div>\
</div>';

function renderTopMenu(level) {

  var menu = document.getElementById('topMenu');
  menu.innerHTML = 
  '<div class="container">\
  <div class="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">\
    <div class="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">\
      <div class="main-btn">\
        <a href="' + level + 'beach-volleyball/index.html">BEACH VB</a>\
        <a href="' + level + 'volleyball/index.html">VOLLEYBALL</a>\
        <a href="' + level + 'services/index.html">SERVICES</a>\
      </div>\
    </div>\
  </div>\
</div>'

}

function renderMenu(page, level) {

  console.log(navigator.userAgent);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("mobile_view:ON");
  }

  var training = '<li><a href="' + level + 'training-leyton.html">Training</a></li>';
  var play = '<li><a href="' + level + 'play.html">Play</a></li>';
  var tournaments = '<li><a href="' + level + 'tournaments.html">Tournaments</a></li>';
  var juniors = '<li><a href="' + level + 'juniors.html">Juniors</a></li>';
  var bookCourt = '<li><a href="' + level + 'book-a-court-worthing.html">Book a court</a></li>';
  var calendar = '<li><a href="' + level + 'calendar-leyton.html">Events Calendar</a></li>';
  var shop = '<li><a href="' + level + 'shop.html">Online Store</a></li>';

  switch (page) {
    case "training":
      training = '<li class="current-menu-item"><a href="' + level + 'training-leyton.html">Training</a></li>';
      break;
    case "play":
      play = '<li class="current-menu-item"><a href="' + level + 'play.html">Play</a></li>';
      break;
    case "tournaments":
      tournaments = '<li class="current-menu-item"><a href="' + level + 'tournaments.html">Tournaments</a></li>';
      break;
    case "juniors":
      juniors = '<li class="current-menu-item"><a href="' + level + 'juniors.html">Juniors</a></li>';
      break;
    case "bookCourt":
      bookCourt = '<li class="current-menu-item"><a href="' + level + 'book-a-court-worthing.html">Book a court</a></li>';
      break;
    case "calendar":
      calendar = '<li class="current-menu-item"><a href="' + level + 'calendar-leyton.html">Events Calendar</a></li>';
      break;
    case "shop":
      shop = '<li class="current-menu-item"><a href="' + level + 'shop.html">Online Store</a></li>';
      break;
    default:

  }

  renderTopMenu('../' + level);

  var links = training + play + tournaments + juniors + bookCourt + calendar + shop;
  var menu = document.getElementById('mainMenu');
  menu.innerHTML = partOne(level) + links + PART2;

}
