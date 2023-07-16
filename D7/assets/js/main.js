
var navbar = document.getElementById('header');
var previousScrollPosition = window.scrollY;

window.addEventListener('scroll', function() {

    var sections = document.querySelectorAll('.section-movies');

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var position = section.getBoundingClientRect();
      // console.log(position)
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }

      var cards = section.querySelectorAll('.card');
      for (var c = 0; c < cards.length; c++) {
        var cardPosition = cards[c].getBoundingClientRect();
        if (cardPosition.top >= 0 && cardPosition.bottom <= window.innerHeight) {
          cards[c].classList.add('show');
        } else {
          cards[c].classList.remove('show');
        }
      }
    }

    var currentScrollPosition = window.scrollY;

    if (previousScrollPosition > currentScrollPosition) {
      navbar.classList.remove('solid');
    } else {
      navbar.classList.add('solid');
    }
  
    previousScrollPosition = currentScrollPosition;

});

function toggleInput() {
  var input = document.getElementById("myInput");
  input.classList.toggle("d-none");
}