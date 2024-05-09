$(document).ready(function() {
  // Mélanger les images
  $('#melangerImages').click(function() {
    var parent = $('#arc-en-ciel');
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    $('#message').text('');
  });

  // Vérifier si l'arc-en-ciel est reconstitué
  $('#arc-en-ciel').on('DOMNodeInserted', function() {
    var ordered = true;
    var children = $(this).children();
    children.each(function(index) {
      if ($(this).index() !== index) {
        ordered = false;
        return false; // Exit each loop
      }
    });
    if (ordered) {
      $('#message').text('Vous avez gagné').css('color', 'green');
    } else {
      $('#message').text('Vous avez perdu').css('color', 'red');
    }
  });
});
