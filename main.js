let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
    modal.style.display ='block'
}

span.onclick = function () {
    modal.style.display = 'none'
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

// slideshow script begins

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // below will make the slides repeat when it get to either last or first
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // on each function call, remove previous shown image
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // remove active class from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", " ");
  }

  // show the image with the right index
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}