const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let i = 0;
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dots = document.querySelector(".dots");
let Image = document.querySelector(".banner-img");
let Texte = document.querySelector("p")

//Fonction pour défilement des images à l'infini avec une condition
function ChangementSlide(sens) {
  i = i + sens;
  if (i > 3) i = 0;
  if (i < 0) i = 3;
  Image.src = "./assets/images/slideshow/" + slides[i].image;
  Texte.innerHTML = slides[i].tagLine
}

// Ajoutez des Event Listeners sur les flèches
arrowLeft.addEventListener("click", () => {
  ChangementSlide(-1);
  console.log("Précédent");
});

arrowRight.addEventListener("click", () => {
  ChangementSlide(1);
  console.log("Suivant");
});

// Ajoutez des bullet points au slider

for (let D = 0; D < slides.length; D++) {
  let dot = document.createElement("div");
  dots.appendChild(dot);
  dot.classList.add("dot");
}
let DotsEnfants = document.querySelectorAll(".dots .dot");
DotsEnfants[0].classList.add("dot_selected");
