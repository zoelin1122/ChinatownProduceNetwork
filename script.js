var containerAnimate = document.querySelector(".containerAnimate");
var images = [
  "frame1.jpg",
  "frame2.jpg",
  "frame3.jpg",
  "frame4.jpg",
  "frame5.jpg"
  // Add more images as needed
];

var numImages = images.length;
var activeIndex = 0;

window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollFraction = scrollTop / scrollHeight;
  var nextIndex = Math.floor(scrollFraction * numImages);
  if (nextIndex !== activeIndex) {
    activeIndex = nextIndex;
    containerAnimate.children[0].classList.remove("active");
    var img = new Image();
    img.src = images[activeIndex];
    img.onload = function() {
      containerAnimate.appendChild(img);
      containerAnimate.children[0].remove();
      img.classList.add("active");
    };
  }
});

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const carouselItem = document.querySelectorAll('.carousel-item');

let scrollPos = 0;
let width = carousel.offsetWidth;

window.addEventListener('resize', () => {
  width = carousel.offsetWidth;
});

carousel.addEventListener('scroll', () => {
  scrollPos = carousel.scrollLeft;
});

// setInterval(() => {
//   scrollPos += width;
//   if (scrollPos >= carouselItems.offsetWidth) {
//     scrollPos = 0;
//   }
//   carousel.scrollTo({
//     left: scrollPos,
//     behavior: 'smooth'
//   });
// }, 5000);

const imageContainer = document.querySelector('.image-container');
const imageItems = document.querySelectorAll('.image-item');

window.addEventListener('scroll', () => {
  imageItems.forEach(item => {
    const scrollValue = item.getAttribute('data-scroll');
    const offset = window.pageYOffset;
    const itemPosition = offset - scrollValue;

    if (itemPosition > 0 && itemPosition < window.innerHeight) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});