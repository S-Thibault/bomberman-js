const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH

var pion = document.getElementById('pion'),
  s = pion.style,
  x = pion.offsetLeft,
  y = pion.offsetTop;

document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;

  switch(keyCode){
    case 38:
      y = y - 40;
      if (y < 0){
      y = 0
    }
    break;

    case 39:
      x = x + 40;
      if (x > 760){
      x = 760
    }
    break;

    case 40:
      y = y + 40;
      if (y > 760){
      y = 760
    }
    break;

    case 37:
      x = x - 40;
      if (x < 0){
      x = 0
    }
    break;
  }


  s.left = String(x) + 'px';
  s.top = String(y) + 'px';
  console.log(x , y);
}

var blockGrid = [];
for(var i = 0; i < H_GRID; i++){
  blockGrid.push([]);
  for(var j = 0; j < V_GRID; j++){
  let block = document.createElement("div");
  block.style.width = "40px";
  block.style.height = "40px";
  block.style.display = "flex";
  block.style.position = "absolute";
  block.style.backgroundColor = "black";
  block.style.marginLeft = (i * GRID_SIZE).toString()+"px";
  block.style.marginTop = (j * GRID_SIZE).toString()+"px";

  document.getElementById("plateau").appendChild(block);
  blockGrid[i].push(block);
  }
}

blockGrid[10][10].style.backgroundColor = "blue";
