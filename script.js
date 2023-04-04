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

// const carousel = document.querySelector('.carousel');
// const carouselItems = document.querySelector('.carousel-items');
// const carouselItem = document.querySelectorAll('.carousel-item');

// let scrollPos = 0;
// let width = carousel.offsetWidth;

// window.addEventListener('resize', () => {
//   width = carousel.offsetWidth;
// });

// carousel.addEventListener('scroll', () => {
//   scrollPos = carousel.scrollLeft;
// });

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

const videos = document.querySelectorAll('.video-container video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});

const navbar = document.querySelector('.navbar');
const navbartitle = document.querySelector('.navbar-title');
const navbarbuttons = document.querySelectorAll('.navbar-button');


window.addEventListener('scroll', () => {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('small');
    navbartitle.classList.add('small');
    navbarbuttons.forEach(navbarbutton => {
      navbarbutton.classList.add('small');
    })
  } else {
    navbar.classList.remove('small');
    navbartitle.classList.remove('small');
    navbarbuttons.forEach(navbarbutton => {
      navbarbutton.classList.remove('small');
    })
  }
});

// const banner = document.querySelector('.banner');
// const bannerOffsetTop = banner.offsetTop;

// window.addEventListener('scroll', () => {
//   // Check if the banner is at the top of the page
//   if (window.pageYOffset >= bannerOffsetTop) {
//     // Add the "sticky" class to the banner
//     banner.classList.add('sticky');
//   } else {
//     // Remove the "sticky" class from the banner
//     banner.classList.remove('sticky');
//   }
// });