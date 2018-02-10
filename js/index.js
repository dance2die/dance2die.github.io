// Approximate jQuery's document.ready(...) equivalent
// https://stackoverflow.com/a/21814964/4035
document.addEventListener("DOMContentLoaded", function() {
  // Set initial background holder
  //   const holderURL = `assets/img/background_holder.svg`;
  //   document.body.style.backgroundImage = `url(${holderURL})`;
  //   document.body.classList.add("body__init");

  let image = new Image();
  image.onload = function() {
    setTimeout(() => {
      document.querySelector("#background").classList.add("background__loaded");
    }, 1500);
  };

  const imageURL = `https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450`;
  const imageSrc = `url(${imageURL})`;
  image.src = imageURL;
});
