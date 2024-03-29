
function partOne(level) {
  return '<div class="container">\
  <div class="row">\
      <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">\
          <div class="site-branding d-flex align-items-center">\
              <a class="d-block" href="' + level + 'index.html" rel="home"><img class="d-block" src="' + level + 'images/SideOut_logo1-156-79.jpg"\
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
        <a href="' + level + 'index.html"><img style="vertical-align: middle;" src="' + level + 'images/icons8-home-page-24.png"></a>\
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

  var home = '<li class="current-menu-item"><a href="' + level + 'index.html">Home</a></li>';
  var beach = '<li><a href="' + level + 'beach-volleyball/index.html">Beach Volleyball</a></li>';
  var indoor = '<li><a href="' + level + 'volleyball/index.html">Volleyball</a></li>';
  var services = '<li><a href="' + level + 'services/index.html">Services</a></li>';

  renderTopMenu(level);
  var links = beach + indoor + services ;
  var menu = document.getElementById('mainMenu');
  menu.innerHTML = partOne(level) + links + PART2;

}
