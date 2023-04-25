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

window.addEventListener("scroll", function() {
  var videoDiv = document.getElementById("ChangeVid");
  var video = videoDiv.getElementsByTagName("video")[0];
  var videoTop = videoDiv.offsetTop;
  var videoBottom = videoTop + videoDiv.offsetHeight;
  var windowTop = window.pageYOffset;
  var windowBottom = windowTop + window.innerHeight;
  if (400 + windowTop < videoBottom && windowBottom > 400 + videoTop) {
    video.play();
    videoDiv.classList.add('fullscreen');
    videoDiv.classList.remove('notfullscreen');
  } else {
    video.pause();
    videoDiv.classList.remove('fullscreen');
    videoDiv.classList.add('notfullscreen');
  }
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

const hoverTexts = [];
document.querySelectorAll('.text-box').forEach(div => {
  hoverTexts.push(div);
});

document.addEventListener("mousemove", function(event) {
  var imageWrapper = document.getElementById("timeline");
  var viewportOffset = imageWrapper.getBoundingClientRect();
  var top = viewportOffset.top;
  var x = event.clientX;
  var y = event.clientY;
  var mid = (window.innerWidth)/2;
  var full = window.innerWidth;

  document.querySelectorAll('.text-box').forEach(textBox => {
    if (x>mid){
      console.log(full-x);
      textBox.style.removeProperty("left");
      textBox.style.right = (full-x-100) + "px";
    } else {
      textBox.style.removeProperty("right");
      textBox.style.left = (x-100) + "px";
    }
    textBox.style.top = (y-200) + "px";
  });
  
});

document.querySelectorAll('path').forEach(path => {
 var id = path.getAttribute( 'id' )

  path.addEventListener('mouseenter', () => {
    for (let i = 0; i < hoverTexts.length; i++) {
      if (hoverTexts[i].getAttribute( 'id' )==id){
        hoverTexts[i].style.display = 'block';
      }
    }
  });

  path.addEventListener('mouseleave', () => {
    for (let i = 0; i < hoverTexts.length; i++) {
      hoverTexts[i].style.display = 'none';
    }
  });

});

document.querySelectorAll('polygon').forEach(polygon => {
  var id = polygon.getAttribute( 'id' )
  polygon.addEventListener('mouseenter', () => {
    for (let i = 0; i < hoverTexts.length; i++) {
      if (hoverTexts[i].getAttribute( 'id' )==id){
        hoverTexts[i].style.display = 'block';
      }
    }
  });

  polygon.addEventListener('mouseleave', () => {
    for (let i = 0; i < hoverTexts.length; i++) {
      hoverTexts[i].style.display = 'none';
    }
  });
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
  const shrinkHeightSize = (600 - this.height) / (otherCells.length - 1);

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
const windowheight = window.innerHeight;
const windowwidth = window.innerWidth;

// Prallax Set the initial positions of the profiles
// profile1.style.left = "210px";
// profile1.style.top = "150px";
// profile2.style.left = "970px";
// profile2.style.top = "300px";
// profile3.style.left = "700px";
// profile3.style.top = "20px";
// profile4.style.left = "400px";
// profile4.style.top = "400px";

// Set the initial positions of the profiles
profile1.style.left = (windowwidth/4)*0.02+"px";
profile1.style.top = "100px";
profile2.style.left = (windowwidth/4)*2.6+"px";
profile2.style.top = "280px";
profile3.style.left = (windowwidth/4)*1.7+"px";
profile3.style.top = "0px";
profile4.style.left = (windowwidth/4)+"px";
profile4.style.top = "330px";



window.addEventListener('scroll', function() {
  updateLines();
});
// Add event listener for window resize event
window.addEventListener('scroll', updateLines);

updateLines();

// const circles = document.querySelectorAll('circle');
// circles.forEach(circle => {
//   const color = circle.getAttribute('fill');
//   if (color == '#fffef3') {
//      circle.setAttribute('fill', '#231f20');
//     } else if (color == '#231f20') {
//       circle.setAttribute('fill', '#fffef3');
//       console.log(`change ${color}`);
//   }
// });

const gs = document.querySelectorAll('.bucket');

// gs.forEach(g => {
//   g.addEventListener('click', event => {
//     // Do something when a section is clicked
//     console.log(`Clicked on section ${g.id}`);
//   });

//   const gId = g.getAttribute("id");

//   // Create a new <a> element
//   const a = document.createElement("a");

//   // Set the href attribute of the <a> element
//   a.setAttribute("href", `pages/${gId}.html`);

//   var child = g.firstChild
//   var cln = child.cloneNode(true);


//   // Add the <a> element as a sibling of the <g> element
//   g.insertBefore(a, child.nextSibling);
  
//   // Position the <a> element over the <g> element using CSS
//   a.style.position = "absolute";
  
//   console.log(g)
//   console.log(child)
//   a.appendChild(cln)
 
// });


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

mapboxgl.accessToken = 'pk.eyJ1Ijoiem9lbGluMTEyMiIsImEiOiJjbGdrN3VqZDMxOWo2M2ttbTJwbHJoeXRsIn0.x6dKFg8GYlnbkYZpDw0KyQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zoelin1122/clgjt02r800kh01mkjriygo13',
    zoom: 13,
    center: [-73.97, 40.71]
});

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

map.addControl(scale, 'bottom-right')

// const years = [
//   '2006',
//   '2007',
//   '2008',
//   '2009',
//   '2010',
//   '2011',
//   '2012',
//   '2013',
//   '2014',
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019',
//   '2020',
//   '2021',
//   '2022',
//   '2023'
//   ];
   
//   function filterBy(year) {
//   const filters = ['==', 'month', year];
//   map.setFilter('earthquake-circles', filters);
//   map.setFilter('earthquake-labels', filters);
   
//   // Set the label to the month
//   document.getElementById('year').textContent = years[year];
//   }

map.on('load', function () {
    map.addLayer({
      'id': 'Food insecurity',
      'type': 'fill',
      'source': {
          'type': 'geojson',
          'data': 'data/foodsecure.geojson'
      },
      'paint': {
          'fill-color': //'#00FF00'
          ['step', ['get', 'Food Insecure (% of residents)'],
              '#ffffff',
              9, '#FFF5EB',
              14, '#FDD0A2',
              20, '#FD8D3C',
              27, '#D94801',
              55, '#7F2704'],
          'fill-opacity': ['case', ['==', ['get', 'Food Insecure (% of residents)'], null], 0,
          ['step', ['get', 'Food Insecure (% of residents)'],
          0,
          9, 0.05,
          14, 0.2,
          20, 0.3,
          27, 0.4,
          55, 0.5]]
      },
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        }
    
    },);

    map.addLayer({
      'id': 'Zoned for wholesale',
      'type': 'fill',
      'source': {
          'type': 'geojson',
          'data': 'data/zoned_for_wholesale.geojson'
      },
      'paint': {
          'fill-color': '#00FF00',
          'fill-opacity': 0.15
      },
      'layout': {
        // Make the layer visible by default.
        'visibility': 'visible'
        }
    },);

    map.addLayer({
      'id': 'Congestion pricing boundary',
      'type': 'line',
      'source': {
          'type': 'geojson',
          'data': 'data/Congestion_pricing.geojson'
      },
      'paint': {
          'line-color': '#FF0000',
          'line-width': {
            'base': 1,
            'stops': [
            [12, 1],
            [22, 3]
            ]}
      },
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        }
    },);


    map.addLayer({
        'id': 'Vendors',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/Vendor_Years.geojson'
        },
        'paint': {
            // 'circle-color': '#FF5F1F',
            'circle-stroke-color': '#fffef3',
            'circle-stroke-width': 0.1,
            'circle-radius': {
              'base': 1.75,
              'stops': [
              [12, 2],
              [22, 180]
              ]
            },
            // Color circles by ethnicity, using a `match` expression.
            'circle-color': [
              'match',
              ['get', 'Type'],
              'makeshift',
              '#b9560b',
              'table',
              '#da4e09',
              'cart',
              '#f75306',
              'storefront',
              '#f97a17',
              'store',
              '#f97a17',
              //large markets
              '#f6b35d'
              ]
        },
        'layout': {
          // Make the layer visible by default.
          'visibility': 'visible'
          },
    },)

    document.getElementById('year').addEventListener('input', (event) => {
      const year = parseInt(event.target.value).toString();
      console.log(year)
      // update the map
      map.setFilter('Vendors', ['==', ['string', ['get', year]], "1"]);
    
      // update text in the UI
      document.getElementById('active-year').innerText = year;
    });

    map.addLayer({
      'id': 'Wholesalers',
      'type': 'circle',
      'source': {
          'type': 'geojson',
          'data': 'data/Wholesalers2005.geojson'
      },
      'paint': {
          'circle-color': '#00FF00',
          'circle-stroke-color': '#fffef3',
          'circle-stroke-width': 0.3,
          'circle-radius': {
            'base': 1.75,
            'stops': [
            [12, 3],
            [22, 180]
            ]
          }  
      },
      'layout': {
        // Make the layer visible by default.
        'visibility': 'visible'
        }
  },)
})

// const layers = [
//  "Vendors",
//  "Wholesalers"
// ];
// const colors = [
//   '#b9560b',
//   '#fffef3'
// ];

// // create legend
// const legend = document.getElementById('legend');

// layers.forEach((layer, i) => {
//   const color = colors[i];
//   const item = document.createElement('div');
//   const key = document.createElement('span');
//   key.className = 'legend-key';
//   key.style.backgroundColor = color;

//   const value = document.createElement('span');
//   value.innerHTML = `${layer}`;
//   item.appendChild(key);
//   item.appendChild(value);
//   legend.appendChild(item);
// });


map.on('click', 'Vendors', function(e){
    let name = e.features[0].properties["USER_Name"];
    let type = e.features[0].properties["USER_Type"];
    let address = e.features[0].properties["USER_Address"];

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(type + '<br><h1>'+ name + '</h1> <br>' + address)
        .addTo(map);
});

map.on('click', 'Wholesalers', function(e){
  let name = e.features[0].properties["Wholesalers200_GeocodeAddres2.USER_Name"];
  let type = e.features[0].properties["Wholesalers200_GeocodeAddres2.USER_Type"];
  let address = e.features[0].properties["Wholesalers200_GeocodeAddres2.USER_Address"];

  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(type + '<br><h1>'+ name + '</h1> <br>' +  address)
      .addTo(map);
});

map.on('mouseenter', 'Vendors', function(){
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'Vendors', function(){
    map.getCanvas().style.cursor = '';
});

map.on('mouseenter', 'Wholesalers', function(){
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'Wholesalers', function(){
  map.getCanvas().style.cursor = '';
});
// // disable map zoom when using scroll
map.scrollZoom.disable();


// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
  // If these two layers were not added to the map, abort 
  if (!map.getLayer('Vendors') || !map.getLayer('Wholesalers')|| !map.getLayer('Zoned for wholesale')|| !map.getLayer('Food insecurity')|| !map.getLayer('Congestion pricing boundary')) {
  return;
  }
   
  // Enumerate ids of the layers.
  const toggleableLayerIds = ['Vendors', 'Wholesalers','Zoned for wholesale', 'Food insecurity','Congestion pricing boundary'];
   
  // Set up the corresponding toggle button for each layer.
  for (const id of toggleableLayerIds) {
  // Skip layers that already have a button set up.
  if (document.getElementById(id)) {
  continue;
  }
   
  // Create a link.
  const link = document.createElement('a');
  link.id = id;
  link.href = '#';
  link.textContent = id;
  if ((link.id != 'Food insecurity')&&(link.id != 'Congestion pricing boundary')){
    link.className = 'active';
  };


   
  // Show or hide layer when the toggle is clicked.
  link.onclick = function (e) {
  const clickedLayer = this.textContent;
  e.preventDefault();
  e.stopPropagation();
   
  const visibility = map.getLayoutProperty(
  clickedLayer,
  'visibility'
  );
   
  // Toggle layer visibility by changing the layout object's visibility property.
  if (visibility === 'visible') {
  map.setLayoutProperty(clickedLayer, 'visibility', 'none');
  this.className = '';
  } else {
  this.className = 'active';
  map.setLayoutProperty(
  clickedLayer,
  'visibility',
  'visible'
  );
  }
  };
   
  const menus = document.getElementById('menu');
  menus.appendChild(link);

  }
  });