document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      image: "slide1.jpg",
      url: "./assets/images/slideshow/slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      url: "./assets/images/slideshow/slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      url: "./assets/images/slideshow/slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      url: "./assets/images/slideshow/slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];
  let bannerImg = document.getElementById("banner-img"); // récupère l'élément de l'image de la banner par son Id
  let tagline = document.getElementById("tagline"); // récupère l'élément du texte de la bannière par son Id
  const right = document.getElementById("arrow-right"); // récupère l'élément de la flèche de droite par son Id
  const left = document.getElementById("arrow-left"); // récupère l'élément de la flèche de gauche par son Id
  let dots = document.querySelectorAll(".dot"); // récupère l'ensemble des éléments représentant les dots
  const url = "./assets/images/slideshow/"; // définit le chemin de base pour les slides
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
      if (index !== 0) {
        // si l'index n'est pas la 1ère slide ...
        dots[0].classList.remove("dot_selected"); // ... j'enlève le dot_selected du start(0)
      }
      // si l'index est <= à la longueur totale du tableau...
      dots[index].classList.add("dot_selected"); // ... on ajoute la classe "dot_selected" au dot correspondant au slide affiché
      if (index + 1 < slides.length) {
        dots[index + 1].classList.remove("dot_selected"); // ... et on retire la classe "dot_selected" au dot du slide non affiché
      }
    }
  });

  right.addEventListener("click", () => {
    // au click de la flèche droite on déclenche un évènement
    index++; // on incrémente de "1" l'index de la variable pour la slide affichée
    if (index >= [...slides].length) {
      // si l'index de la variable est >= à la longueur totale du tableau ...
      index = 0;
      dots[3].classList.remove("dot_selected");
      // dots[(index = [...slides].length)].classList.remove("dot_selected");
    }
    bannerImg.src = url + slides[index].image;
    tagline.innerHTML = slides[index].tagLine;
    if (index <= [...slides].length) {
      // si l'index est <= à la longueur totale du tableau...
      dots[index].classList.add("dot_selected"); // ... on ajoute la classe "dot_selected" au dot correspondant au slide affiché
      if (index - 1 < slides.length) {
        dots[index - 1].classList.remove("dot_selected"); // ... et on retire la classe "dot_selected" au dot du slide non affiché
      }
    }
  });
});
//      console.log(nextSlide, [...slides].length); => 1 array
//      console.log(nextSlide, [...slides]); => 1 array de 4 données
