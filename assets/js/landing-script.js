let btnToPrinceBorn = document.getElementById('btn-to-prince-born');
let princeBorn = document.getElementById('prince-born');
let contentPresentation = document.getElementById('content-presentation');

// SCROLL TO PRINCE BORN
// Functions scroll
btnToPrinceBorn.addEventListener('click', ()=> {
  window.scrollTo({
    top: princeBorn.offsetTop,
    behavior: 'smooth'
  });
});

/*
  || GET FORMS CONTACT SUBMITING
*/

/* GET VALUES OF FORM AND VERIFY */
const form = document.querySelector('form');
const popup = document.querySelector(".popup-message");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  popup.style.display = "block";
});

/**
 *  || PERSONNAGE
 */
let personnageData = [
  {
    'image': {
      'src': './assets/images/accueil/Pantherhome_slider_1.png',
      'alt': 'Photo de Killmonger avec ses arme'
    },
    'title': 'KILLMONGER',
    'text': "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir."
  },
  {
    'image': {
      'src': './assets/images/accueil/Pantherhome_slider_2.png',
      'alt': 'Photo de Dora Milaje'
    },
    'title': 'OKOYE',
    'text': "Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures."
  },
  {
    'image': {
      'src': './assets/images/accueil/Pantherhome_slider_3.png',
      'alt': 'Photo de Killmonger avec ses arme'
    },
    'title': '',
    'text': ""
  }
]
let currentPersonnages = personnageData.splice(0, 3);
let selectedImage = document.getElementById('selected-image');
let selectedTitle = document.getElementById('selected-title');
let selectedText = document.getElementById('selected-text');

let image2 = document.getElementById('image-2');
let title2 = document.getElementById('title-2');
let text2 = document.getElementById('text-2');

let image3 = document.getElementById('image-3');

let morePerson = document.getElementById('more-persons');

function changeContent(personnages) {
  selectedImage.innerHTML = "";
  selectedTitle.innerHTML = "";
  selectedText.innerHTML = "";
  image2.innerHTML = "";
  title2.innerHTML = "";
  text2.innerHTML = "";
  image3.innerHTML = "";

  let sImg = document.createElement('img');
  sImg.setAttribute('src', personnages[0].image.src);
  sImg.setAttribute('alt', personnages[0].image.alt);
  selectedImage.appendChild(sImg);
  selectedTitle.innerHTML = personnages[0].title;
  selectedText.innerHTML = personnages[0].text;

  let img2 = document.createElement('img');
  img2.setAttribute('src', personnages[1].image.src);
  img2.setAttribute('alt', personnages[1].image.alt);
  image2.appendChild(img2);
  title2.innerHTML = personnages[1].title;
  text2.innerHTML = personnages[1].text;

  let img3 = document.createElement('img');
  img3.setAttribute('src', personnages[2].image.src);
  img3.setAttribute('alt', personnages[2].image.alt);
  let p = document.createElement('p');
  p.setAttribute('id', 'more-persons');
  p.innerHTML = '>';
  image3.style.position = 'relative';
  p.style.position = 'absolute';
  p.style.right = '10%';
  p.style.top = '25%';
  p.addEventListener('click', ()=>{

  });
  image3.appendChild(p);
  image3.appendChild(img3);
}

changeContent(currentPersonnages);