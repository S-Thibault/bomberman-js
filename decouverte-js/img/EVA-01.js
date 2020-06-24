const EVA-01 = document.querySelectorAll('personnage');

// Un tableau qui va contenir toutes les images dans l'ordre
let animation = [];
animation.push("url('img/animation-EVA-01/EVA-01-01.png')");
animation.push("url('img/animation-EVA-01/EVA-01-02.png')");
animation.push("url('img/animation-EVA-01/EVA-01-03.png')");
animation.push("url('img/animation-EVA-01/EVA-01-04.png')");
animation.push("url('img/animation-EVA-01/EVA-01-05.png')");
animation.push("url('img/animation-EVA-01/EVA-01-06.png')");
animation.push("url('img/animation-EVA-01/EVA-01-07.png')");
animation.push("url('img/animation-EVA-01/EVA-01-08.png')");
animation.push("url('img/animation-EVA-01/EVA-01-07.png')");
animation.push("url('img/animation-EVA-01/EVA-01-06.png')");
animation.push("url('img/animation-EVA-01/EVA-01-05.png')");
animation.push("url('img/animation-EVA-01/EVA-01-04.png')");
animation.push("url('img/animation-EVA-01/EVA-01-03.png')");
animation.push("url('img/animation-EVA-01/EVA-01-02.png')");
animation.push("url('img/animation-EVA-01/EVA-01-01.png')");

let iAnimation = 0;

function changerAnimation() {

    if (iAnimation < animation.length-1) {
      EVA-01.forEach(element => {
        element.style.backgroundImage = animation[iAnimation];
      });
      ianimation++;
    }
    else {
      EVA-01.forEach(element => {
        element.style.backgroundImage = animation[3];
      });
      iAnimation = 0;
    }
  window.setTimeout("changerAnimation()", 100)
}
