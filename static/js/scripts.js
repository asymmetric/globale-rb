head.ready(function() {
  var current_page = document.URL.split('/').pop();

  if (current_page === "") {
    var index = snack.wrap('#sidebar a:first-child')[0];
    snack.wrap(index).addClass('current');
  }
  else {
    snack.wrap('#sidebar a').each(function(el, i) {
      var attr = el.getAttribute('href');
      if (attr == current_page) {
        snack.wrap(el).addClass('current');
      }
    });
  }
});
