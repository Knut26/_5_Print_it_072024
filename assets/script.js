const slides = [
  {
    name: "slide1",
    image: "slide1.jpg",
    url: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    name: "slide2 active",
    image: "slide2.jpg",
    url: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    name: "slide3",
    image: "slide3.jpg",
    url: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    name: "slide4",
    image: "slide4.png",
    url: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const flecheDeGauche = document.getElementById("flecheDeGauche");
const flecheDeDroite = document.getElementById("flecheDeDroite");
const banner = document.querySelector("#banner");
const bannerImg = document.querySelectorAll(".banner-img");

flecheDeGauche.addEventListener("click", (e) => {
  const calcSlideImgPrecedente = e.target.id === "flecheDeGauche" ? 1 : -1;
  const slideActive = document.querySelector(".active");

  let nouvelIndexFlecheGauche =
    calcSlideImgPrecedente + [...slides].indexOf(slideActive);

  if (nouvelIndexFlecheGauche < 0)
    nouvelIndexFlecheGauche = [...slides].length - 1;
  slides[nouvelIndexFlecheGauche].classList.add("active");
  slideActive.classList.remove("active");
});

flecheDeDroite.addEventListener("click", (a) => {
  const calcSlideImgSuivante = a.target.id === "flecheDeDroite" ? 1 : -1;
  const slideActive = document.querySelector(".active");

  let nouvelIndexFlecheDroite =
    calcSlideImgSuivante - [...slides].indexOf(slideActive);

  if (nouvelIndexFlecheDroite >= [...slides].length)
    nouvelIndexFlecheDroite = 0;
  slides[nouvelIndexFlecheDroite].classList.add("active");
  slideActive.classList.remove("active");
});

// flecheDeDroite.addEventListener("click", function () {
//   alert("ola!");
// });

// flecheDeDroite.addEventListener("click", function () {
//   for (let i = 0; i > slides.url; i++) {
//     slides(slides.url[i]);
//   }
// });

// const LeftArrowClick = document.getElementById("flecheDeGauche");

// LeftArrowClick.addEventListener("click", function () {
//   alert("test de click");
// });

// const RightArrowClick = document.getElementById("flecheDeDroite");

// RightArrowClick.addEventListener("click", function () {
//   alert("2e test !");
// });

// console.log(slides);
