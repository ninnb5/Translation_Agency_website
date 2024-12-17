const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

menuButton.addEventListener('mouseenter', () => {
  popupMenu.classList.add('show');
});

menuButton.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!popupMenu.matches(':hover')) {
      popupMenu.classList.remove('show');
    }
  }, 100);
});

popupMenu.addEventListener('mouseleave', () => {
  popupMenu.classList.remove('show');
});
