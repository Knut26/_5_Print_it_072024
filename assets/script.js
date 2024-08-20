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
const img = document.querySelectorAll("img");
const btn = document.querySelectorAll(".btn");
const slidesAll = document.querySelectorAll(".slide");
const dots = document.getElementById("dots");
const slideActive = document.querySelector(".active");
const banner = document.getElementById("banner");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "flecheDeDroite" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    let newIndex = calcNextSlide + [...slidesAll].indexOf(slideActive);
    if (newIndex < 0) {
      newIndex = [...slidesAll].length - 1;
    }
    if (newIndex > [...slidesAll].length - 1) {
      newIndex = 0;
    }
    slidesAll[newIndex].classList.add("active");
    slideActive.classList.remove("active");
  });
});

// console.log(slides[1].url);
// ajout des points
slides.forEach((slide) => {
  const p = document.createElement("p");
  p.innerText = slides.url;
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
  const tag = document.createElement("tag");
  tag.innerHTML = slides[index].tagLine;
  banner.appendChild(tag);
});

// dots qui disparaissent sur les autres slides
// pas de tagLines
//
//
//
//
// console.log(slides[1].url);
