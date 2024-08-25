const slides = [
  {
    name: "slide active",
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
const banner = document.getElementById("banner");
const buttons = document.querySelectorAll(".btn");
const flecheDeGauche = document.getElementById("flecheDeGauche");
const flecheDeDroite = document.getElementById("flecheDeDroite");

const slide1 = document.createElement("img");
slide1.classList.add("active");
slide1.src = "./assets/images/slideshow/slide1.jpg";
banner.appendChild(slide1);
const tagLine1 = document.createElement("div");
tagLine1.innerText = "Impressions tous formats ";
banner.appendChild(tagLine1);
const span1 = document.createElement("span");
span1.innerText = "boutique en ligne";
banner.appendChild(span1);

const slide2 = document.createElement("img");
slide1.src = "./assets/images/slideshow/slide2.jpg";
banner.appendChild(slide2);
const tagLine2 = document.createElement("div");
tagLine2.innerText = "Tirages haute définition grand format ";
banner.appendChild(tagLine2);
const span2 = document.createElement("span");
span2.innerText = "pour vos bureaux et events";
banner.appendChild(span2);

const slide3 = document.createElement("img");
slide1.src = "./assets/images/slideshow/slide3.jpg";
banner.appendChild(slide3);
const tagLine3 = document.createElement("div");
tagLine3.innerText = "Grand choix de couleurs ";
banner.appendChild(tagLine3);
const span3 = document.createElement("span");
span3.innerText = "de CMJN aux pantones";
banner.appendChild(span3);

const slide4 = document.createElement("img");
slide1.src = "./assets/images/slideshow/slide4.png";
banner.appendChild(slide4);
const tagLine4 = document.createElement("div");
tagLine4.innerText = "Autocollants ";
banner.appendChild(tagLine4);
const span4 = document.createElement("span");
span4.innerText = "avec découpe laser sur mesure";
banner.appendChild(span4);

const slideAll = [slide1, slide2, slide3, slide4];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "flecheDeDroite" ? 1 : -1;
    const slideActive = document.querySelector(".active");
    newIndex = calcNextSlide + [...slides].indexOf(slideActive);
    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex > [...slides].length) newIndex = 0;
    slideAll[newIndex].classList.add("active");
    slideActive.classList.remove("active");

    const dot = document.createElement("span");
    dot.classList.add("dot");
    banner.appendChild(dot);
  });
});

// creation d'autant de dots qu'il y a d'images
function createDots() {
  const dots = document.getElementById("dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
  }
}

// ajoute ou enleve le dot_selected sur le dot
function updateDots() {
  const dotsList = document.querySelectorAll(".dot");
  for (let i = 0; i < dotsList.length; i++) {
    const dot = dotsList[index];
    if (index == position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}
