document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      name: "slide1 active",
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      name: "slide2",
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      name: "slide3",
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      name: "slide4",
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let bannerImg = document.getElementById("banner-img"); // récupère l'élément de l'image de la banner par son Id
  let tagline = document.getElementById("tagline"); // récupère l'élément du texte de la bannière par son Id
  const right = document.getElementById("arrow-right"); // récupère l'élément de la flèche de droite par son Id
  const left = document.getElementById("arrow-left"); // récupère l'élément de la flèche de gauche par son Id
  let dots = document.querySelectorAll(".dot"); // récupère l'ensemble des éléments représentant les dots
  const url = "./assets/images/slideshow/"; // définit le chemin de base pour les images
  const buttons = document.querySelectorAll(".button");

  function start(slide) {
    bannerImg.src = url + slides[slide].image; // màj de la source de l'image de la banner
    tagline.innerHTML = slides[slide].tagLine; // màj du texte de la banner
    dots.forEach((dot, i) => {
      if (i === slide) {
        dot.classList.add("dot_selected"); // ajoute la classe "dot_selected" au dot correspondant au slide affiché
      } else {
        dot.classList.remove("dot_selected"); // retire la classe "dot_selected" au dot du slide non affiché
      }
    });
  }

  start(0); // initialise le carrousel avec la première diapositive

  let currentIndex = 0; // création de la variable pour la slide de base

  buttons.forEach((button) => {
    for (let i = 0; i <= [...slides].length; i++) {
      button.addEventListener("click", (e) => {
        let nextSlide = e.target.id === "arrow-right" ? +1 : -1;
        bannerImg.src = url + slides[nextSlide].image;
        tagline.innerHTML = slides[nextSlide].tagLine;

        if (i > [...slides].length) {
          i = 0;
        }

        if (i < [...slides].length) {
          i = [...slides].length - 1;
        }

        if (i <= [...slides].length) {
          dots[nextSlide].classList.add("dot_selected");
          dots[currentIndex].classList.remove("dot_selected");
        }
      });
    }
  });
});

//      console.log(nextSlide, [...slides].length); => 1 array
//      console.log(nextSlide, [...slides]); => 1 array de 4 données

//
//

//
//

//
//

//
//

//
//

/*document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      name: "slide1 active",
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      name: "slide2",
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      name: "slide3",
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      name: "slide4",
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let bannerImg = document.getElementById("banner-img"); // récupère l'élément de l'image de la banner par son Id
  let tagline = document.getElementById("tagline"); // récupère l'élément du texte de la bannière par son Id
  const right = document.getElementById("arrow-right"); // récupère l'élément de la flèche de droite par son Id
  const left = document.getElementById("arrow-left"); // récupère l'élément de la flèche de gauche par son Id
  let dots = document.querySelectorAll(".dot"); // récupère l'ensemble des éléments représentant les dots
  const url = "./assets/images/slideshow/"; // définit le chemin de base pour les images
  const buttons = document.querySelectorAll(".button");

  function start(slide) {
    bannerImg.src = url + slides[slide].image; // màj de la source de l'image de la banner
    tagline.innerHTML = slides[slide].tagLine; // màj du texte de la banner
    dots.forEach((dot, i) => {
      if (i === slide) {
        dot.classList.add("dot_selected"); // ajoute la classe "dot_selected" au dot correspondant au slide affiché
      } else {
        dot.classList.remove("dot_selected"); // retire la classe "dot_selected" au dot du slide non affiché
      }
    });
  }

  start(0); // initialise le carrousel avec la première diapositive

  let currentIndex = 0; // création de la variable pour la slide de base

  left.addEventListener("click", () => {
    currentIndex--; // décrémente la variable de -1 pour aller à la diapositive précédente
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; // on revient à la dernière slide du tableau si on décrémente de -1 à la première slide
    }
    bannerImg.src = url + slides[currentIndex].image; // màj de l'image de la bannière en fonction de la slide
    tagline.innerHTML = slides[currentIndex].tagLine; // màj du texte de la bannière en fonction de la slide
    dots.forEach((dot) => {
      dot.classList.remove("dot_selected"); // retire la classe "dot_selected" des dots
    });
    dots[currentIndex].classList.add("dot_selected"); // ajoute la classe "dot_selected" au dot correspondant au slide affiché
    // bannerImg.style.transition = "all 500ms ease";
  });

  right.addEventListener("click", () => {
    currentIndex++; // incrémente la variable de 1 pour passer à la diapositive suivante
    if (currentIndex >= slides.length) {
      currentIndex = 0; // si la variable est égale ou > au tableau on repasse à la 1ère slide
    }
    bannerImg.src = url + slides[currentIndex].image; // màj de l'image de la bannière en fonction de la slide
    tagline.innerHTML = slides[currentIndex].tagLine; // màj du texte de la bannière en fonction de la slide
    dots.forEach((dot) => {
      dot.classList.remove("dot_selected"); // retire la classe "dot_selected" des dots
    });
    dots[currentIndex].classList.add("dot_selected"); // ajoute la classe "dot_selected" au dot correspondant au slide affiché
    // bannerImg.style.transition = "all 500ms ease";
  });
});

 */
