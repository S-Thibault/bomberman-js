var monstres = [];
for (var i = 0; i < 10; i++) {
  let monstre = document.createElement("div");

  let x = 0;
  let y = 0;

  while (!blocGrid[x][y].traverser || (x === 0 && y === 0) || /* Exclusion des positions ci-après pour la position de x et y */(x >= 0 && x <= 1 && y >= 0 && y <= 1 || x >= (H_GRID - 2)  && x < H_GRID && y >= 0 && y <= 1 || x >= 0  && x <= 1 && y >= (V_GRID - 2) && y < V_GRID || x >= (H_GRID - 2)  && x < H_GRID && y >= (V_GRID - 2) && y < V_GRID)) {
      x = Math.floor(Math.random() * (H_GRID));
      y = Math.floor(Math.random() * (V_GRID));
  }

  blocGrid[x][y].traverser = false;
  monstre.monstreX = x;
  monstre.monstreY = y;
  monstre.direction = "bas";
  monstre.style.width = GRID_SIZE + "px";
  monstre.style.height = GRID_SIZE + "px";
  monstre.style.display = "flex";
  monstre.style.position = "absolute";
  monstre.style.backgroundRepeat = "no-repeat";
  monstre.style.backgroundSize = "contain";
  monstre.style.backgroundPosition = "center";
  monstre.style.backgroundImage = "url(img/larva.gif)";
  monstre.style.zIndex = "100";
  monstre.id = "monstre" + String(i);
  monstre.style.left = String(monstre.monstreX * GRID_SIZE) + "px";
  monstre.style.top = String(monstre.monstreY * GRID_SIZE) + "px";
  plateau.appendChild(monstre);
  monstres.push(monstre);
}


var frame = 0;

function rondemonstre() {

  if (frame === 30) {

    for (var i = 0; i < monstres.length; i++) {
      let monstre = monstres[i];
      let monstreX = monstre.monstreX;
      let monstreY = monstre.monstreY;
      let direction = monstre.direction;
      blocGrid[monstreX][monstreY].traverser = true;

    switch (direction) {
      case "gauche":
        if (monstreY > 0 && blocGrid[monstreX][monstreY - 1].traverser) {
          monstreY--;
        }
        break;
      case "droite":
        if (monstreX < H_GRID - 1 && blocGrid[monstreX + 1][monstreY].traverser) {
          monstreX++;
        }
        break;
      case "haut":
        if (monstreY < H_GRID - 1 && blocGrid[monstreX][monstreY + 1].traverser) {
          monstreY++;
        }
        break;
      case "bas":
        if (monstreX > 0 && blocGrid[monstreX - 1][monstreY].traverser) {
          monstreX--;
        }
        break;
    }

    monstre.style.left = String(monstreX * GRID_SIZE) + "px";
    monstre.style.top = String(monstreY * GRID_SIZE) + "px";

    let random = random100();
    console.log(random100());

      if (random < 25) {
        direction = "haut";
      }
      if (random >= 25 && random < 50) {
        direction = "bas";
      }
      if (random >= 50 && random < 75) {
        direction = "gauche";
      }
      if (random > 75) {
        direction = "droite";
      }

      monstre.monstreX = monstreX;
      monstre.monstreY = monstreY;
      monstre.direction = direction;
      blocGrid[monstreX][monstreY].traverser = false;
    }

    frame = 0;
  }

frame++;

// On crée l'animation - 60 x / seconde
window.requestAnimationFrame(rondemonstre);

}

window.requestAnimationFrame(rondemonstre);
 
