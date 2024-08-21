window.onload = function () {
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
  const slidesAll = document.querySelectorAll("slides");
  const dots = document.getElementById("dot");
  const slideActive = document.querySelector(".active");
  const bannerImg = document.getElementById("banner-img");
  // let tag = document.getElementById("[...slides].tagLine");
  const url = "./assets/images/slideshow/";
  //prise en compte de l'image dans le JS pour affichage sur HTML
  //création de l'élément image
  let image = document.createElement("img");
  //difinition de l'url de l'image
  image.src = "./assets/images/slideshow/slide1.jpg";
  image.src = "./assets/images/slideshow/slide2.jpg";
  image.src = "./assets/images/slideshow/slide3.jpg";
  image.src = "./assets/images/slideshow/slide4.png";
  // ajout de l'image à un élément parent
  bannerImg.appendChild(image);
  // création d'une div
  let tagLine = document.createElement("div");
  // avec le nom tagLine
  tagLine.className = "tagLine";
  // avec du texte
  tagLine.innerText = "Impressions tous formats";
  // ajout de l'image à un élément parent
  bannerImg.appendChild(tagLine);
  // création d'une span
  let span = document.createElement("span");
  // ajout de texte
  span.innerHTML = "en boutique et en ligne";
  // ajout de l'image à un élément parent
  bannerImg.appendChild(span);

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
    bannerImg.appendChild(tag);
  });
};

// function init(slide) {
//   bannerImg.src = url + slides[slide].image; // Mettre à jour la source de l'image de la bannière avec l'image de la diapositive actuelle
//   tag.innerHTML = slides[slide].tagLine; // Mettre à jour le texte de la bannière avec le texte de la diapositive actuelle
//   dots.forEach((dot, i) => {
//     dot.classList.toggle("dot_selected", i === slide); // Ajouter ou retirer la classe "dot_selected" pour indiquer quel point est sélectionné
//   });
// }

// init(0);
//
//
//
// console.log(slides[1].url);
