const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/* 

f1: mise en place d'une fonction nombreDePhotos pour les 4 photos
au chargement de la page

f2: mise en place d'une fonction pour indiquer la position initiale
de la photo au chargement de la page pour ensuite décaler vers
la droite ou vers la gauche la liste des 4 photos

f3 et f4: récupération de la banner et des 2 flèches

f5: modification de la largeur de la banner pour pouvoir y insérer
les 4 photos

f6 creation d'un for

f7: création d'une div via JS intégrant les 4 images

*/
document.body.onload = function () {
  nombreDePhotos = 4; /*f1*/
  positionPhoto = 0; /*f2*/
  banner = document.getElementById("banner"); /*f3*/
  flecheDeGauche = document.getElementById("flecheDeGauche"); /*f4*/
  flecheDeDroite = document.getElementById("flecheDeDroite"); /*f4*/
};

flecheDeGauche.addEventListener("click", () => {
  positionPhoto.style.transform = translate(positionPhoto - 1 + 4)%4;)

flecheDeDroite.addEventListener("click", () => {
  positionPhoto=(positionPhoto + slides);
  banner.style.transform = translateX(400+"px");});



// const LeftArrowClick = document.getElementById("flecheDeGauche");

// LeftArrowClick.addEventListener("click", function () {
//   alert("test de click");
// });

// const RightArrowClick = document.getElementById("flecheDeDroite");

// RightArrowClick.addEventListener("click", function () {
//   alert("2e test !");
// });

// console.log(slides);
