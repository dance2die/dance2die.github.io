const imageURL = `https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450`;
const imageSrc = `url(${imageURL})`;
// in milliseconds
const transitionLength = 750;
const background = document.querySelector("body");

// Approximate jQuery's document.ready(...) equivalent
// https://stackoverflow.com/a/21814964/4035
document.addEventListener("DOMContentLoaded", function() {
  let image = new Image();
  image.src = imageURL;

  image.onload = onImageLoad;
});

const onImageLoad = () => {
  setTimeout(loadBackgroundImage, transitionLength);
};

const loadBackgroundImage = () => {
  background.classList.remove("background__holder");
  background.style.backgroundImage = imageSrc;
  background.style.opacity = 1;
};
