const slides = [
  {
    name: "slide",
    image: "slide1.jpg",
    url: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    name: "slide active",
    image: "slide2.jpg",
    url: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    name: "slide",
    image: "slide3.jpg",
    url: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    name: "slide",
    image: "slide4.png",
    url: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//-------------------------------------------------------------------
const flecheDeGauche = document.getElementById("flecheDeGauche");
const flecheDeDroite = document.getElementById("flecheDeDroite");
const banner = document.querySelector("#banner");
const bannerImg = document.querySelectorAll(".banner-img");
//-------------------------------------------------------------------
// slides.forEach(("./assets/images/slideshow/slide") => {
//   const slide = document.createElement("slide");
//   slide.src = "./assets/images/slideshow/";
//   const td = document.createElement("td");
//   td.appendChild([...slide]);
//   const tr =
//     banner.querySelector("tr") ||
//     banner.appendChild(document.createElement("tr"));
//   tr.appendChild(td);
// });
//-------------------------------------------------------------------
flecheDeGauche.addEventListener("click", (e) => {
  let calcSlideImgPrecedente;
  if (e.target.id === "flecheDeGauche") {
    calcSlideImgPrecedente = 1;
  } else {
    calcSlideImgPrecedente = -1;
  }

  let slideActive = document.querySelector(".active");

  let nouvelIndexFlecheDeGauche =
    calcSlideImgPrecedente + [...slides].indexOf(slideActive);

  if (nouvelIndexFlecheDeGauche < 0)
    nouvelIndexFlecheDeGauche = [...slides].length - 1;
  // slides[nouvelIndexFlecheDeGauche].classList.add("active");
  slideActive.classList.remove("active");
});
//-------------------------------------------------------------------
flecheDeDroite.addEventListener("click", (a) => {
  let calcSlideImgSuivante;
  if (a.target.id === "flecheDeDroite") {
    calcSlideImgSuivante = 1;
  } else {
    calcSlideImgSuivante = -1;
  }

  let slideActive = document.querySelector(".active");

  let nouvelIndexFlecheDeDroite =
    calcSlideImgSuivante - [...slides].indexOf(slideActive);

  if (nouvelIndexFlecheDeDroite >= [...slides].length)
    nouvelIndexFlecheDeDroite = 0;
  // slides[nouvelIndexFlecheDeDroite].classList.add("active");
  slideActive.classList.remove("active");
});
//-------------------------------------------------------------------
