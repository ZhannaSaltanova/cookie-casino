$(document).ready(function() {
    $('.burger-button').on('click', function(e) {
      e.preventDefault();  
      $('.burgermenu').toggleClass('burgermenu_active');
    });
  
    $('.close').on('click', function(e) {
      e.preventDefault();
      $('.burgermenu').removeClass('burgermenu_active');
    });
  });

let images = ["./img/banner/AnyConv.com__sl1.webp", "./img/banner/AnyConv.com__sl2.webp"]; 
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideImg').src = images[currentImageIndex];
}

setInterval(changeImage, 3000); 

document.getElementById('newestButton').addEventListener('click', function() {
  document.getElementById('newestContent').classList.add('active');
  document.getElementById('jackpotsContent').classList.remove('active');
  this.classList.add('active');
  document.getElementById('jackpotsButton').classList.remove('active');
});

document.getElementById('jackpotsButton').addEventListener('click', function() {
  document.getElementById('jackpotsContent').classList.add('active');
  document.getElementById('newestContent').classList.remove('active');
  this.classList.add('active');
  document.getElementById('newestButton').classList.remove('active');
});