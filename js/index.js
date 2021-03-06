// Approximate jQuery's document.ready(...) equivalent
// https://stackoverflow.com/a/21814964/4035
document.addEventListener("DOMContentLoaded", function() {
  let image = new Image();
  image.onload = function() {
    const background = document.querySelector("#background");
    // setTimeout(() => {
    //   // FAKE the pulsing effect.
    //   // Firefox keep on flashing so let's fake the flicker as a pulsing effect.
    //   background.style.opacity = 0;
      
    //   setTimeout(() => {
    //     background.classList.add("background__loaded");
    //     background.style.opacity = 1;
    //   }, 500);
    // }, 500);
    setTimeout(() => {
      background.classList.add("background__loaded");
      background.style.opacity = 1;
    }, 500);

  };

  const imageURL = `https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450`;
  const imageSrc = `url(${imageURL})`;
  image.src = imageURL;
});
