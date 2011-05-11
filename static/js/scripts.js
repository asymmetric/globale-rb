//domReady(function() {
//  var current_page = document.URL.split('/').pop();
//  var page;
//
//  for (page in $('#sidebar a')) {
//    if (page.getAttribute('href') == current_page) {
//      page.className = 'current';
//    }
//  }
//});

head.ready(function() {
  var current_page = document.URL.split('/').pop();
  var page;
  var n;

  snack.wrap('#sidebar a').each(function(el, i) {
    if (el.getAttribute('href') == current_page) {
      snack.wrap(el).addClass('current');
    }
  });
});
