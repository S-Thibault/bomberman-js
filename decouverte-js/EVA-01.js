var animationInterval;
var spriteSheet = document.getElementById("personnage");
var widthOfSpriteSheet = 415;
var widthOfEachSprite = 40;
var heightOfSpriteSheet = 48;
var heightOfEachSprite = 40;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimationgauche() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
  setTimeout(stopAnimation, 400);

}

//Start animation

// startAnimation();

const EVA01 = document.querySelectorAll("personnage");

let imagesPersonnage = [];
imagesPersonnage.push("url('img/animation/EVA-01-01.png')");
imagesPersonnage.push("url('img/animation/EVA-01-02.png')");
imagesPersonnage.push("url('img/animation/EVA-01-03.png')");
imagesPersonnage.push("url('img/animation/EVA-01-04.png')");
imagesPersonnage.push("url('img/animation/EVA-01-05.png')");
imagesPersonnage.push("url('img/animation/EVA-01-06.png')");
imagesPersonnage.push("url('img/animation/EVA-01-07.png')");
imagesPersonnage.push("url('img/animation/EVA-01-08.png')");


let iPersonnage = 0;

function changerImagesPersonnage() {

    if (iPersonnage < imagesPersonnage.length-1) {
      EVA01.forEach(element => {
        element.style.backgroundImage = imagesPersonnage[iPersonnage];
      });
      iPersonnage++;
    }
    else {
      EVA01.forEach(element => {
        element.style.backgroundImage = imagesPersonnage[15];
      });
      iPersonnage = 0;
    }
  window.setTimeout("changerImagesPersonnage()", 75)
}
