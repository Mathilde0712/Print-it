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

//mes variables
let i = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const Image = document.querySelector(".banner-img");
const Texte = document.querySelector("p")


// Ajoutez des Event Listeners sur les flèches
arrowLeft.addEventListener("click", () => {
  ChangementSlide(-1); //on enlève -1 si on va a gauche
  BulletActif(i)
});

arrowRight.addEventListener("click", () => {
  ChangementSlide(1); //on ajoute 1 si on va à droite
  BulletActif(i)
});

//Fonction pour défilement des images à l'infini avec une condition
function ChangementSlide(sens) {
  i = i + sens;
  if (i > slides.length -1) i = 0; //-1 car on compte à partir de 0 et non de 1
  if (i < 0) i = slides.length -1;
  Image.src = "./assets/images/slideshow/" + slides[i].image; //on refait le chemin de l'image
  Texte.innerHTML = slides[i].tagLine
}

// Ajoutez des bullet points au slider

for (let D = 0; D < slides.length; D++) {
  let dot = document.createElement("div");
  dots.appendChild(dot);
  dot.classList.add("dot");
}
let DotsEnfants = document.querySelectorAll(".dots .dot");
DotsEnfants[i].classList.add("dot_selected"); // i = 0 donc c'est le premier qui est sélectionné et a donc la classe .dot_selected

//fonction pour changement de dot actif en même temps que l'image
function BulletActif(count) {
	DotsEnfants.forEach((dot,i) => {
	  if (i === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }




 
