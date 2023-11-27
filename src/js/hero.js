animateLetters();

function animateLetters() {
  const letters = document.querySelectorAll('.food-letter');

  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.animation = 'none';
      letter.offsetHeight;
      letter.style.animation = null;
    }, index * 100);
  });
}
