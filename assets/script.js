const slides = [
  {
    name: "slide active",
    image: "slide1.jpg",
    url: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    name: "slide",
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
const banner = document.querySelector("banner");
const bannerImg = document.querySelectorAll(".banner-img");
// console.log(slides[1].url);

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
  if (e.target.id === "flecheGauche") {
    calcSlideImgPrecedente = -1;
  } else {
    calcSlideImgPrecedente = 1;
  }
  let slideActive = document.querySelector(".active");
  if (slideActive) {
    let nouvelIndexFlecheDeGauche =
      [...slides].indexOf(slideActive) + calcSlideImgPrecedente;
    if (nouvelIndexFlecheDeGauche < 0) {
      nouvelIndexFlecheDeGauche = slides.length - 1;
    }
    slideActive.classList.remove("active");
    slides[nouvelIndexFlecheDeGauche].classList.add("active");
  } else {
    console.error("Aucun élément actif trouvé.");
  }
});

//-------------------------------------------------------------------

flecheDeDroite.addEventListener("click", (e) => {
  let calcSlideImgSuivante;
  if (e.target.id === "flecheDroite") {
    calcSlideImgSuivante = 1;
  } else {
    calcSlideImgSuivante = -1;
  }
  let slideActive = document.querySelector(".active");
  if (slideActive) {
    let nouvelIndexFlecheDeDroite =
      [...slides].indexOf(slideActive) + calcSlideImgSuivante;
    if (nouvelIndexFlecheDeDroite >= slides.length) {
      nouvelIndexFlecheDeDroite = 0;
    }
    slideActive.classList.remove("active");
    slides[nouvelIndexFlecheDeDroite].classList.add("active");
  } else {
    console.error("Aucun élément actif trouvé.");
  }
});
//-------------------------------------------------------------------
