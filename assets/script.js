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

  start(0); // initialisation du carrousel avec la première diapositive

  let index = 0; // création de la variable pour la slide de base

  left.addEventListener("click", () => {
    // au click de la flèche gauche on déclenche un évènement
    index--; // on décrémente de "1" l'index de la variable pour la slide affichée
    if (index < 0) {
      // si l'index est inférieur à zéro...
      index = [...slides].length - 1; // l'index est alors replacé en bout de la liste d'éléments du tableau (-1 car le comptage débute à "0" et non "1")
    }
    bannerImg.src = url + slides[index].image; // màj de la source de l'image de la banner
    tagline.innerHTML = slides[index].tagLine; // màj du texte de la banner

    if (index <= [...slides].length) {
      // si l'index est <= à la longueur totale du tableau...
      dots[index].classList.add("dot_selected"); // ... on ajoute la classe "dot_selected" au dot correspondant au slide affiché
      dots[index + 1].classList.remove("dot_selected"); // ... et on retire la classe "dot_selected" au dot du slide non affiché
    }
  });

  right.addEventListener("click", () => {
    // au click de la flèche droite on déclenche un évènement
    index++; // on incrémente de "1" l'index de la varibale pour la slide affichée
    if (index >= [...slides].length) {
      // si l'index de la variable est >= à la longueur totale du tableau ...
      index = 0;
      dots[3].classList.remove("dot_selected"); ////////////////////////////////////////////////////////// comment entrer la longueur du tableau de manière dynamique ...? ////////////////////////////////////////
      // dots[(index = [...slides].length)].classList.remove("dot_selected");
    }
    bannerImg.src = url + slides[index].image;
    tagline.innerHTML = slides[index].tagLine;

    if (index <= [...slides].length) {
      // si l'index est <= à la longueur totale du tableau...
      dots[index].classList.add("dot_selected"); // ... on ajoute la classe "dot_selected" au dot correspondant au slide affiché
      dots[index - 1].classList.remove("dot_selected"); // ... et on retire la classe "dot_selected" au dot du slide non affiché
    }
  });
});

//      console.log(nextSlide, [...slides].length); => 1 array
//      console.log(nextSlide, [...slides]); => 1 array de 4 données

/*
  let bannerImg = document.getElementById("banner-img");
  let tagline = document.getElementById("tagline"); //
  const right = document.getElementById("arrow-right");
  const left = document.getElementById("arrow-left"); 
  let dots = document.querySelectorAll(".dot");
  const url = "./assets/images/slideshow/"; 
  const buttons = document.querySelectorAll(".button");

  function start(slide) {
    bannerImg.src = url + slides[slide].image;
    tagline.innerHTML = slides[slide].tagLine;
    dots.forEach((dot, i) => {
      if (i === slide) {
        dot.classList.add("dot_selected"); 
      } else {
        dot.classList.remove("dot_selected"); 
      }
    });
  }

  start(0);

  let currentIndex = 0;

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
*/

//      console.log(nextSlide, [...slides].length); => 1 array
//      console.log(nextSlide, [...slides]); => 1 array de 4 données
