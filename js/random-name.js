$(document).ready(function() {
  var names = ["Ben Ortiz", "oirah"];
  $('a').html(names[Math.floor(Math.random() * names.length)]);
});
