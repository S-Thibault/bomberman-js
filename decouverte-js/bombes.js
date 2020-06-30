let bombes = [];
for (var i = 0; i < 3; i++) {
bombe = document.createElement('div');
bombe.style.width = GRID_SIZE + "px";
bombe.style.height = GRID_SIZE + "px";
bombe.style.backgroundColor = "red";
bombe.style.backgroundSize = "contain"
bombe.style.position = 'absolute';
bombe.style.zIndex = "100";
bombe.id = "bomb";
bombe.bombx = x ;
bombe.bomby = y ;
bombes.push(bombe);
}

let explosions = [];
for (var i = 0; i < 4; i++) {
let explosion = document.createElement("div");
explosion.style.width = GRID_SIZE + "px";
explosion.style.height = GRID_SIZE + "px";
explosion.style.position = "absolute";
explosion.style.backgroundRepeat = "no-repeat";
explosion.style.backgroundSize = "auto";
explosion.style.backgroundPosition = "center";
explosion.style.zIndex = "100";
explosion.style.backgroundColor = "blue";
explosion.id = "explosion" + String(i);
explosions.push(explosion);
}


function creationBombes(blocGrid) {

  if (!document.getElementById("bombe")) {

      bombe.style.left = String(x + GRID_SIZE) + 'px';
      bombe.style.top = String(y + GRID_SIZE) + 'px';

    plateau.appendChild(bombe);
    bombes.push(bombe);


    setTimeout(disparitionBombe, 800);
    bombe.bombex = x ;
    bombe.bombey = y ;

      }
  }

  function disparitionBombe(){
    if (document.getElementById("bombe")) {

      for (var i = 0; i < bombes.length; i++) {

        let explosionX = bombe.bombex;
            explosionY = bombe.bombey;
            blockGrid[explosionX][explosionY].destructible = false;
            blockGrid[explosionX][explosionY].traverser = true;

            var explosion = blockGrid[explosionX][explosionY];

        if (explosionY > 0 && blockGrid[explosionX][explosionY - 1].destructible)
        blockGrid[explosionX][explosionY - 1].remove();
        blockGrid[explosionX][explosionY-1].traverser = true;
        console.log(explosionY,explosionX, explosion);


        if (explosionY < H_GRID - 1 && blockGrid[explosionX + 1][explosionY].destructible)
        blockGrid[explosionX + 1][explosionY].remove();
        blockGrid[explosionX + 1][explosionY].traverser = true;
        console.log(explosionY,explosionX, explosion);


        if (explosionY < V_GRID - 1 && blockGrid[explosionX][explosionY + 1].destructible )
        blockGrid[explosionX][explosionY + 1].remove();
        blockGrid[explosionX][explosionY + 1].traverser = true;
        console.log(explosionY,explosionX, explosion);


        if (explosionX > 0 && blockGrid[explosionX - 1][explosionY].destructible)
        blockGrid[explosionX - 1][explosionY].remove();
        blockGrid[explosionX - 1][explosionY].traverser = true;

        console.log(explosionY,explosionX, explosion);

    }
  document.getElementById("bombe").remove();
  }
  }
