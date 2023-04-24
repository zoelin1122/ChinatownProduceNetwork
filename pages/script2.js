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

window.addEventListener("scroll", function() {
  var windowTop = window.pageYOffset;
  var windowBottom = windowTop + window.innerHeight;
  var diagramDiv = document.querySelector(".diagram-wrapper");  
  var diagramTop = diagramDiv.offsetTop;
  var diagramBottom = diagramTop + diagramDiv.offsetHeight;
  if (400 + windowTop < diagramBottom && windowBottom > 400 + diagramTop) {
    diagramDiv.classList.add('fullscreen');
    diagramDiv.classList.remove('notfullscreen');
  } else {
    diagramDiv.classList.remove('fullscreen');
    diagramDiv.classList.add('notfullscreen');
  }
});

const gs = document.querySelectorAll('.bucket');

gs.forEach(g => {
  g.addEventListener('mouseover', () => {
    const circles = g.querySelectorAll('circle');
    circles.forEach(circle => {
      const color = circle.getAttribute('fill');
      if (color == '#fffef3') {
        console.log(`change ${color}`);
        circle.setAttribute('fill', '#231f20');
      } else if (color == '#231f20') {
        circle.setAttribute('fill', '#fffef3');
      }
    });
  });
  g.addEventListener('mouseout', () => {
    const circles = g.querySelectorAll('circle');
    console.log(`unchange ${g}`);

    circles.forEach(circle => {
      const color = circle.getAttribute('fill');
      if (color == '#231f20') {
        circle.setAttribute('fill', '#fffef3');
      } else if (color == '#fffef3') {
        circle.setAttribute('fill', '#231f20');
      }
    });
  });
});

function goBack() {
  window.history.back();
}