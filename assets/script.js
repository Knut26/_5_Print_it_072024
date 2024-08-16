const slides = [
  {
    name: "slide",
    name: "slide",
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
const banner = document.getElementById("banner");
const dots = document.getElementById("dots");
let index = 0;
const photos = 4;
console.log(dots);
// console.log(slides[1].url);

// ajout des points
slides.forEach((slide) => {
  const p = document.createElement("p");
  p.innerText = slides.url;
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
});

function createImage(index) {
  const img = document.createElement("img");
  img.setAttribute("src", slides[index].url);
  // img.setAttribute("tagLine", slides[index].tagLine);
  banner.appendChild(img);
  img.classList.add("banner");
  img.classList.add("active");
  const p = document.createElement("p");
  p.innerHTML = slides[index].tagLine;
  banner.appendChild(p);
}
// bannerImg.appendChild(img);
createImage(index);

flecheDeDroite.addEventListener("click", (e) => {
  e.preventDefault();
  if (index <= photos) {
    div = document.createElement("div");
    div.className = "slide";
    div.classList.add("active");
    div.style.backgroundImage = 'url("./assets/images/slideshow/"+".jpg")';
    banner.appendChild(div);
    //   if (index == ) {
    //   dots.classList.add("dot_selected");
    // } else {
    //   dots.classList.remove("dot_selected");
    //}
    createImage(1);
  }
});

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
//   const p = document.createElement("p");
//   p.innerText = slides.url;
//   const dot = document.createElement("span");
//   dot.classList.add("dot");
//   dots.appendChild(dot);
// });

// function createImage(index) {
//   const img = document.createElement("img");
//   const p = document.createElement("p");
//   img.classList.add("banner-img");
//   img.classList.add("active");
//   img.setAttribute("src", slides[index].url);
//   p.innerHTML = slides[index].tagLine;
//   banner.appendChild(p);
// }
// // banner.appendChild(img);

// //-------------------------------------------------------------------
// createImage(0);

// flecheDeDroite.addEventListener("click", (e) => {
//   e.preventDefault();
//   createImage(2);
// });

// let position = 0;
// const numberOfSlide = slides.length;

// createCaroussel(position);
// createDots();
// updateDot();

// const left = document.querySelector(".arrow_left");
// const right = document.querySelector(".arrow_right");

// left.addEventListener("click", function () {
//   if (position == 0) {
//     position = numberOfSlide - 1;
//   } else {
//     position--;
//   }
//   createCaroussel(position);
// });

// right.addEventListener("click", function () {
//   if (position == numberOfSlide - 1) {
//     position = 0;
//   } else {
//     position++;
//   }
//   createCaroussel(position);
// });

// function createDots() {
//   const dots = document.querySelector(".dots");
//   for (let index = 0; index < slides.length; index++) {
//     // Pour chaque element dans la boucle je vais créer un dot
//     const dot = document.createElement("div");
//     dot.setAttribute("class", "dot");
//     dots.appendChild(dot);
//   }
// }

// function updateDot() {
//   const listPoints = document.querySelectorAll(".dot");
//   for (let index = 0; index < listPoints.length; index++) {
//     const dot = listPoints[index];
//     if (index == position) {
//       dot.classList.add("dot_selected");
//     } else {
//       dot.classList.remove("dot_selected");
//     }
//   }
// }

// function createCaroussel(position) {
//   const element = slides[position];
//   const img = document.querySelector(".banner-img");
//   img.setAttribute("src", "./assets/images/slideshow/" + element.image);

//   const p = document.querySelector(".banner-txt");
//   p.innerHTML = element.tagLine;

//   updateDot();
// }
//-------------------------------------------------------------------
//   const bannerImg = document.getElementById("banner-img");
//   const flecheDeGauche = document.getElementById("flecheDeGauche");
//   const flecheDeDroite = document.getElementById("flecheDeDroite");
//   const dots = document.getElementById("dots");
//   let currentIndex = 0;
//   // console.log(dots);
//   // console.log(slides[1].url);

//   function updateDots(index) {
//     dots.forEach((dot, i) => {
//       if (i === index) {
//         dot.classList.add("dot_selected");
//       } else {
//         dot.classList.remove("dot_selected");
//       }
//     });
//   }

//   function updateImage(index, direction) {
//     if (currentIndex === -1 && direction === "left") {
//       currentIndex = slides.length - 1;
//     } else if (currentIndex === slides.length && direction === "right") {
//       currentIndex = 0;
//     }
//   }

//   // let imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
//   // bannerImg.src = `slides${currentIndex}`.image;
//   // bannerImg.alt = `Slide ${currentIndex + 1}`;

//   let tagLine = slides[currentIndex].tagLine;
//   document.querySelector("p").innerHTML = tagLine;
//   // console.log(`clique sur ${direction}`);

//   flecheDeGauche.addEventListener("click", function () {
//     currentIndex = currentIndex - 1;
//     updateImage(currentIndex, "left");
//     updateDots(currentIndex);
//   });
// });
//----------------------------------------------------

// slides.forEach((slide) => {
//   const dot = document.createElement("span");
//   dot.classList.add("dot");
//   dots.appendChild(dot);
// });

// function createImage(index) {
//   const img = document.createElement("img");
//   const p = document.createElement("p");
//   img.classList.add("banner-img");
//   img.classList.add("active");
//   img.setAttribute("src", slides[index].url);
//   p.innerHTML = slides[index].tagLine;
//   banner.appendChild(p);
//   banner.appendChild(img);
// }

// createImage(0);

// flecheDeDroite.addEventListener("click", (e) => {
//   e.preventDefault();
//   createImage(1);
//   flecheDeDroite.addEventListener("click", (e) => {
//     e.preventDefault();
//     createImage(2);
//     flecheDeDroite.addEventListener("click", (e) => {
//       e.preventDefault();
//       createImage(3);
//       flecheDeDroite.addEventListener("click", (e) => {
//         e.preventDefault();
//         createImage(0);
//       });
//     });
//   });
// });

// flecheDeGauche.addEventListener("click", (e) => {
//   e.preventDefault();
//   createImage(3);
//   flecheDeGauche.addEventListener("click", (e) => {
//     e.preventDefault();
//     createImage(2);
//     flecheDeGauche.addEventListener("click", (e) => {
//       e.preventDefault();
//       createImage(1);
//       flecheDeGauche.addEventListener("click", (e) => {
//         e.preventDefault();
//         createImage(0);
//       });
//     });
//   });
// });

// //--------ajout
// function UpdateDots(index) {
//   dots.forEach((dot, i) => {
//     if (i === index) {
//       dot.classList.add("dot_selected");
//     } else {
//       dot.classList.remove("dot_selected");
//     }
//   });
// }

// function updateImage(index, direction) {
//   if (index === -1 && direction === "gauche") {
//     index = slides.length - 1;
//   } else if (index === slides.length && direction === "droite") {
//     index = 0;
//   }

//   const directory = "./assets/images/slideshow/${slides[index].img}";
//   bannerImg.src = directory;
//   bannerImg.tagLine - "Slide {index + 1}";

//   const tagLine = slides[index].tagLine;
//   document.querySelector("p").innerHTML = tagLine;
//   console.log("clique à droite ${direction}");
// }

// // flecheDeDroite.addEventListener("click", (e) => {
// //   index = index + 1;
// //   updateImage(index + 1);
// //   UpdateDots(index);
// // });

// //--------fin ajout

//-------------------------------------------------------------------

// flecheDeGauche.addEventListener("click", (e) => {
//   let calcSlideImgPrecedente;
//   if (e.target.id === "flecheGauche") {
//     calcSlideImgPrecedente = -1;
//   } else {
//     calcSlideImgPrecedente = 1;
//   }
//   let slideActive = document.querySelector(".active");
//   if (slideActive) {
//     let nouvelIndexFlecheDeGauche =
//       [...slides].indexOf(slideActive) + calcSlideImgPrecedente;
//     if (nouvelIndexFlecheDeGauche < 0) {
//       nouvelIndexFlecheDeGauche = slides.length - 1;
//     }
//     slideActive.classList.remove("active");
//     slides[nouvelIndexFlecheDeGauche].classList.add("active");
//   } else {
//     console.error("Aucun élément actif trouvé.");
//   }
// });

//-------------------------------------------------------------------

// flecheDeDroite.addEventListener("click", (e) => {
//   let calcSlideImgSuivante;
//   if (e.target.id === "flecheDroite") {
//     calcSlideImgSuivante = 1;
//   } else {
//     calcSlideImgSuivante = -1;
//   }
//   let slideActive = document.querySelector(".active");
//   if (slideActive) {
//     let nouvelIndexFlecheDeDroite =
//       [...slides].indexOf(slideActive) + calcSlideImgSuivante;
//     if (nouvelIndexFlecheDeDroite >= slides.length) {
//       nouvelIndexFlecheDeDroite = 0;
//     }
//     slideActive.classList.remove("active");
//     slides[nouvelIndexFlecheDeDroite].classList.add("active");
//   } else {
//     console.error("Aucun élément actif trouvé.");
//   }
// });
// //-------------------------------------------------------------------

// const nextButton = document.querySelector("flecheDeDroite");
// const prevButton = document.querySelector("flecheDeGauche");
// let currentIndex = 0;
// function updateCarousel() {
//   const carouselItems = document.querySelectorAll(".banner-img");
//   carouselItems.forEach((item, index) => {
//     item.classList.toggle("active", index === currentIndex);
//   });
// }

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   let bannerImg = document.querySelector(currentIndex);
//   bannerImg.style.opacity = 1;
//   updateCarousel();
// });

// prevButton.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   updateCarousel();
// });
// //-------------------------------------------------------------------

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
//
//
// inclure un nouveau doss dans le doss slides
// let space = { name: "blabla" };

// slides.push(space);
// console.log(slides);
//
// récupère une image du HTML pour l'afficher via JS
// const bannerImg = document.querySelector(".banner-img.active");
// bannerImg.style.opacity = 1;
//
//affiche sur la console l'url de telle image
// console.log(slides[0].url);

//-------------------------------------------------------------------

// HTML = document.addEventListener("DOMContentLoaded", () => {
//   // Récupère le conteneur du carrousel
//   const banner = document.querySelectorAll("#banner");

//   // Crée une fonction pour afficher les images
//   function displayImages() {
//     slides.forEach((slide, index) => {
//       const slideElement = document.createElement("div");
//       slideElement.classList.add("carousel-item");
//       slideElement.innerHTML = `
//       <img src="${slide.url}" alt="${slide.name}">
//       <p>${slide.tagLine}</p>
//     `;

//       // Ajoute la classe "active" au premier élément
//       if (index === 0) {
//         slideElement.classList.add("active");
//       }

//       // Ajoute l'élément au conteneur
//       banner.appendChild(slideElement);
//     });
//   }

//   // Appel de la fonction pour afficher les images
//   displayImages();
//
//-------------------------------------------------------------------
//
// console.log(slides[2].url);
//-------------------------------------------------------------------
