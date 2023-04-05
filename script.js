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


//Sticky Banners

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

const cells = document.querySelectorAll(".cell");
const table = document.querySelector(".table");

function handleMouseOver(e) {
  // Set the size of the hovered cell
  this.classList.add("enlarge");

  // Set the size of the other cells
  const sameRowCells = [...cells].filter(cell => cell.parentNode === this.parentNode);
  // const sameColCells = [...cells].filter(cell => (cell.parentNode !== this.parentNode) && this.parentNode.indexOf(this) === cell.parentNode.indexOf(cell));
  const otherCells = [...cells].filter(cell => cell !== sameRowCells);
  const shrinkWidthSize = (80 - (this.width)) / (sameRowCells.length - 1);
  const shrinkHeightSize = (500 - this.height) / (otherCells.length - 1);

  sameRowCells.forEach((cell, index) => {
    if (!cell.classList.contains("enlarge")) {
      cell.classList.add("shrink-width");
      cell.classList.add("same-row"); 
      cell.style.width = `${shrinkWidthSize}vw`;
    }
  });

  otherCells.forEach((cell, index) => {
    if (!cell.classList.contains("enlarge")) {
      cell.classList.add("shrink-height");
      cell.classList.add("same-col");
      cell.style.height = `${shrinkHeightSize}px`;
    }
  });
}


function handleMouseOut(e) {
  // Reset the size of all cells
  cells.forEach(cell => {
    cell.classList.remove("enlarge");
    cell.classList.remove("shrink-width");
    cell.classList.remove("shrink-height");
    cell.classList.remove("same-row");
    cell.classList.remove("same-col");
  });
}

cells.forEach(cell => {
  cell.addEventListener("mouseover", handleMouseOver);
  cell.addEventListener("mouseout", handleMouseOut);
});


// Set up the container and profiles
const container = document.getElementById('dragableprofile-container');
const profiles = document.querySelectorAll('.dragableprofile');

// Set up variables for tracking drag events
let isDragging = false;
let startX, startY;
let initialX, initialY;
let currentX, currentY;


// Add event listeners for drag events on each profile
profiles.forEach(profile => {
  profile.addEventListener('mousedown', dragStart);
  profile.addEventListener('mouseup', dragEnd);
  profile.addEventListener('mousemove', drag);
});


function dragStart(e) {
  // Set up variables for tracking drag events
  startX = e.clientX;
  startY = e.clientY;
  initialX = this.offsetLeft;
  initialY = this.offsetTop;
  
  // Set isDragging flag to true
  isDragging = true;

  // Update line positions
  updateLines();
}

function dragEnd(e) {
  // Set isDragging flag to false
  isDragging = false;
  // Update line positions
  updateLines();
}

function drag(e) {
  if (isDragging) {
    // Calculate the new position of the profile
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    
    // Set the new position of the profile
    this.style.left = (initialX + currentX) + 'px';
    this.style.top = (initialY + currentY) + 'px';
    updateLines();
  }
}

function updateLines() {
  // Get the line container and clear its contents
  const lineContainer = document.getElementById('line-container');
  lineContainer.innerHTML = '';

  // Calculate the coordinates of each profile
  const positions = [];
  profiles.forEach(profile => {
    const img = profile.getElementsByTagName('img')[0];
    const x = profile.offsetLeft + img.offsetWidth / 2;
    const y = profile.offsetTop + img.offsetHeight / 2;
    positions.push({x: x, y: y});
  });


  // Draw a line between each pair of profiles
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const line = document.createElement('div');
      line.classList.add('line');
      line.style.left = positions[i].x + 'px';
      line.style.top = positions[i].y + 'px';
      line.style.width = Math.sqrt(Math.pow(positions[j].x - positions[i].x, 2) + Math.pow(positions[j].y - positions[i].y, 2)) + 'px';
      line.style.transformOrigin = 'left center';
      line.style.transform = 'rotate(' + Math.atan2(positions[j].y - positions[i].y, positions[j].x - positions[i].x) + 'rad)';
      lineContainer.appendChild(line);
    }
  }
}

// Initialize the profiles
const profile1 = document.getElementById("profile1");
const profile2 = document.getElementById("profile2");
const profile3 = document.getElementById("profile3");
const profile4 = document.getElementById("profile4");

// Set the initial positions of the profiles
profile1.style.left = "10px";
profile1.style.top = "50px";
profile2.style.left = "900px";
profile2.style.top = "250px";
profile3.style.left = "630px";
profile3.style.top = "-30px";
profile4.style.left = "300px";
profile4.style.top = "300px";

window.addEventListener('scroll', function() {
  updateLines();
});
// Add event listener for window resize event
window.addEventListener('scroll', updateLines);

updateLines();
