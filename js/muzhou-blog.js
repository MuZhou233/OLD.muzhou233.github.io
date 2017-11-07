$(document).ready(function () {
  $('button').click(function (jumpevent) {
    var jumpurl = $(this).attr('href');
    if (typeof jumpurl != 'undefined' && jumpurl[0] != '#') {
      jumpevent.preventDefault();
      $('#loading').fadeIn('fast');
      window.setTimeout(function () {
        window.location.href = jumpurl,
        1000
      });
    }
  });
  $('a').click(function (jumpevent) {
    var jumpurl = $(this).attr('href');
    if (typeof jumpurl != 'undefined' && jumpurl[0] != '#') {
      jumpevent.preventDefault();
      $('#loading').fadeIn('fast');
      window.setTimeout(function () {
        window.location.href = jumpurl,
        1000
      });
    }
  });
});