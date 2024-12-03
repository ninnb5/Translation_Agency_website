const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');
menuButton.addEventListener('mouseenter', () => {
    const isMenuVisible = popupMenu.style.display === 'block';
    popupMenu.style.display = isMenuVisible ? 'none' : 'block';
  });