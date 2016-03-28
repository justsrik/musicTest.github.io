// onclick reveal function
function clickFunc() {
  'use strict';
  document.querySelector('.chevron').classList.add('display-none');
  var list = document.querySelectorAll('.topSongsList');
  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove('display-none');
  }
}
(function() {
  'use strict';
// slide toggle for nav
  function slideToggle() {
    document.querySelector('.header ul').classList.toggle('display-none');
  }
  document.querySelector('#bars').addEventListener('click', slideToggle);

// window resize function
  window.onresize = function() {
    if (window.innerWidth > 750) {
      document.querySelector('.header ul').classList.remove('display-none');
    } else {
      document.querySelector('.header ul').classList.add('display-none');
    }
  };
}());
