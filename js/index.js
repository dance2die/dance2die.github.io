// Approximate jQuery's document.ready(...) equivalent
// https://stackoverflow.com/a/21814964/4035
document.addEventListener("DOMContentLoaded", function() {
  console.log("hi!");
  
  const image = new Image();
  const imageURL = `https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450`;
  image.onload = function() {
    document.body.style.backgroundImage = imageURL;
  };
});
