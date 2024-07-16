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

const LeftArrowClick = document.getElementById("flecheDeGauche");

LeftArrowClick.addEventListener("click", function () {
  alert("test de click");
});

const RightArrowClick = document.getElementById("flecheDeDroite");

RightArrowClick.addEventListener("click", function () {
  alert("2e test !");
});
