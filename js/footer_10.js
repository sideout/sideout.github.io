function columnDDescriptionAndSocial(level) {
  return '<div class="col-12 col-md-6 col-lg-3">\
  <div class="foot-about">\
    <h2><a class="foot-logo" href="#"><img src="' + level + 'images/footer250.png" alt=""></a></h2>\
    <p>Established in 2011, SideOut is the UK\'s largest, most innovative, dynamic and member-focused beach volleyball club. We are based in Leyton, East London and in Worthing, West Sussex.</p>\
    <ul class="d-flex flex-wrap align-items-center">\
     \
    </ul>\
  </div>\
</div>';
}

function columnLinks(level) {

  let viewParam = "";

  var fullpath = window.location;
  let urlString1 = fullpath + "";

  var rootLevel = "";
if(urlString1.includes("/beach-volleyball/") || urlString1.includes("/volleyball/") || urlString1.includes("/services/")) {
  console.log("Section: BV");
  rootLevel = "../"
}

// if(urlString1.includes("/volleyball/")) {
//   console.log("Section: V");
//   rootLevel = "../"
// }

// if(urlString1.includes("/services/")) {
//   console.log("Section: S");
//   rootLevel = "../"
// }




  //<li><a href="' + level + 'meet-the-team.html">Meet the Team</a></li>\
  return '<div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">\
    <h2>About Us</h2>\
    <ul>\
      <li><a href="'+rootLevel+level+'club-history.html">Club History</a></li>\
      <li><a href="'+rootLevel+level+'privacy-policy.html">Privacy Policy</a></li>\
    </ul>\
  </div>';
}

function columnUpdates(level) {
  return '<div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">\
    <div class="foot-latest-news">\
      <h2>Social Media</h2>\
        <ul>\
        <li style="margin-bottom: 10px;"><a href="https://www.facebook.com/SideOutUK" target="_blank"><i class="fab fa-facebook"></i>acebook</a></li>\
        <li style="margin-bottom: 10px;"><a href="https://www.instagram.com/sideout_uk/" target="_blank"><i class="fab fa-instagram"></i> instagram</a></li>\
        <li style="margin-bottom: 10px;"><a href="https://www.youtube.com/user/SideOutUK" target="_blank"><i class="fab fa-youtube"></i> youtube</a></li>\
        <li style="margin-bottom: 10px;"><a href="https://twitter.com/SideOut_UK" target="_blank"><i class="fab fa-twitter"></i> twitter</a></li>\
        <li style="margin-bottom: 10px;"><a href="https://www.tiktok.com/@sideoutuk" target="_blank"><i class="fab fa-tiktok"></i> tiktok</a></li>\
      </ul>\
    </div>\
  </div>';
}

const COLUMN_CONTACT =
  '<div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">\
  <div class="foot-contact">\
    <h2>Contact</h2>\
    <ul>\
        <li><i class="fa fa-envelope"></i><span>Email: info[at]sideout.co.uk</span></li>\
        <li><i class="fa fa-map-marker"></i><span>London, Ive Farm Sports Ground, E10 5UE</span></li>\
        <li><i class="fa fa-map-marker"></i><span>Worthing, Beach Volleyball, BN11 2FG</span></li>\
    </ul>\
  </div>\
</div>';

const RIGHTS =
  '<div class="container">\
  <div class="row">\
    <div class="col-12">\
        <p class="m-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved  |  SideOut Beach Volleyball Club Ltd  |  Template by <a href="https://colorlib.com" target="_blank">Colorlib</a> | <a target="_blank" href="https://icons8.com/icon/53382/home-page">Home Page</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>\
    </div>\
  </div>\
</div>'

function renderFooter(level) {
  var footerRow = document.getElementById('footer-widget');
  footerRow.innerHTML =
    '<div class="container">\
    <div class="row">' +
    columnDDescriptionAndSocial(level) + columnLinks(level) + columnUpdates(level) + COLUMN_CONTACT +
    '</div>\
  </div>';

  var footerRow = document.getElementById('footer-bar');
  footerRow.innerHTML = RIGHTS;
}