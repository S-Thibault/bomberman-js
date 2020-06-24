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
imagesPersonnage.push("url('img/animation/EVA-01-07.png')");
imagesPersonnage.push("url('img/animation/EVA-01-06.png')");
imagesPersonnage.push("url('img/animation/EVA-01-05.png')");
imagesPersonnage.push("url('img/animation/EVA-01-04.png')");
imagesPersonnage.push("url('img/animation/EVA-01-03.png')");
imagesPersonnage.push("url('img/animation/EVA-01-02.png')");
imagesPersonnage.push("url('img/animation/EVA-01-01.png')");

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
