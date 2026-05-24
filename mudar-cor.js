const blackCard = document.querySelector('.black-card');
const whiteCard = document.querySelector('.white-card');

function setBackground(color, textColor, whiteCardTextColor) {
  document.body.style.backgroundColor = color;
  document.body.style.color = textColor;

  if (whiteCard) {
    whiteCard.style.color = whiteCardTextColor;
  }
}

if (blackCard) {
  blackCard.addEventListener('click', () => setBackground('#273248', 'white', 'black'));
}

if (whiteCard) {
  whiteCard.addEventListener('click', () => setBackground('white', 'black', ''));
}
