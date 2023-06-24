/**
 *  || APPARITION PROGRESSIVE WITH ANIMATION FADE IN 
 */
// Récupérez tous les éléments avec la classe "fade-slide"
const fadeSlideElements = document.querySelectorAll('.fade-in');

// Fonction pour vérifier si un élément est visible à l'écran
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Fonction pour gérer le défilement et l'apparition progressive des éléments avec un effet de slide
function handleScrollFadeSlide() {
  fadeSlideElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.transform = 'translateX(0)';
    }
  });
}

// Ajoutez un gestionnaire d'événement de défilement
window.addEventListener('scroll', handleScrollFadeSlide);

// Appelez la fonction handleScrollFadeSlide 
handleScrollFadeSlide();

// APPARITION PROGRESSIVE WITH ZOOM ANIMATION
// Récupérez toutes les images avec la classe "fade-zoom"
const fadeZoomImages = document.querySelectorAll('.fade-zoom');

// Fonction pour vérifier si une image est visible à l'écran
function isImageVisible(image) {
  const rect = image.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Fonction pour gérer le défilement et l'apparition progressive
function handleScrollFadeZoom() {
  fadeZoomImages.forEach((image) => {
    if (isImageVisible(image)) {
      image.style.opacity = '1';
      image.style.visibility = 'visible';
      image.style.transform = 'scale(1)';
    }
  });
}

// Ajoutez un gestionnaire d'événement de défilement 
window.addEventListener('scroll', handleScrollFadeZoom);

// Appelez la fonction handleScrollFadeZoom 
handleScrollFadeZoom();