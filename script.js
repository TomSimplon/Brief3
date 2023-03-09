window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
    header.classList.add('nav-fixed');
  } else {
    header.classList.remove('nav-fixed');
  }
});

/* Le code suivant permet de basculer l'affichage du menu burger lorsqu'on clique dessus */
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.onglets').style.display = 'block';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.querySelector('.onglets').style.display = 'none';
    menuOpen = false;
  }
});