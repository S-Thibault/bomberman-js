const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;


const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH.toString()+"px";
plateau.style.height = WINDOW_HEIGHT.toString()+"px";
plateau.style.border = "64px solid";
plateau.style.borderbackgroundColor = "black 64 round";

var blocGrid = [];
for(var i = 0; i < H_GRID; i++){
  blocGrid.push([]);
  for(var j = 0; j < V_GRID; j++){

    let bloc = document.createElement("div");
    bloc.style.width = "40px";
    bloc.style.height = "40px";
    bloc.style.display = "flex";
    bloc.style.position = "absolute";
    bloc.style.backgroundRepeat = "no-repeat";
    bloc.style.backgroundSize = "contain";
    bloc.style.backgroundPosition = "center";


    if (random100() > 80){
       bloc.className = "brique";
       bloc.traverser = false;
     }
     else if (random100() > 50 && random100() <= 80 ) {
       bloc.style.backgroundColor = "green";
       bloc.className = "mur";
       bloc.traverser = false;
     }
     else {
       bloc.style.backgroundColor = "red";
       bloc.className = "sol";
       bloc.traverser = true;
     }

     bloc.style.marginLeft = (i * GRID_SIZE).toString()+"px";
     bloc.style.marginTop = (j * GRID_SIZE).toString()+"px";

     document.getElementById("plateau").appendChild(bloc);
     blocGrid[i].push(bloc);
  }
}

function randomColor(){
  return "#" + ((1<<24)*Math.random()|0).toString(16);
}

function random100() {
  return Math.floor(Math.random() * 100);
}
