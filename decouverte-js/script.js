var personnageADeplacer = document.getElementById('personnage'),
  x = personnageADeplacer.offsetLeft, // On récupère la position absolue initiale (gauche).
  y = personnageADeplacer.offsetTop; // On récupère la position absolue initiale (haut).

  document.onkeydown = function(event){
    var event = event || window.event,
    keyCode = event.keyCode;
    switch(keyCode){
    case 38: // touche "Flèche Haut"
      if (y > 0 && blocGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE; // ou y-=40;
      break;

    case 39: // touche "Flèche Droite"
      if (x < WINDOW_WIDTH && blocGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      personnage.style.backgroundImage = "url('img/04.gif')";
      break;

    case 40: // touche "Flèche Bas"
      if (y < WINDOW_HEIGHT && blocGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      break;

    case 37: // touche "Flèche Gauche"
      if (x > 0 && blocGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
        personnage.style.backgroundImage = "url('img/03.gif')";
      break;

      case 32 :
      if (!blocGrid[x / GRID_SIZE][y / GRID_SIZE].bombe) {
                 creationBombes(blocGrid);
               }
               break;

             default: return;
}


  personnageADeplacer.style.left = String(x) + 'px';
  personnageADeplacer.style.top = String(y) + 'px';
}
