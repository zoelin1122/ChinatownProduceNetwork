mapboxgl.accessToken = 'pk.eyJ1Ijoiem9lbGluMTEyMiIsImEiOiJjbGdrN3VqZDMxOWo2M2ttbTJwbHJoeXRsIn0.x6dKFg8GYlnbkYZpDw0KyQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zoelin1122/clgjt02r800kh01mkjriygo13',
    zoom: 13,
    center: [-73.98, 40.715]
});

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-right')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

map.addControl(scale, 'bottom-right')

map.on('load', function () {
    map.addLayer({
        'id': 'vendors',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/Vendors.geojson'
        },
        'paint': {
            'circle-color': '#00FF00',
            'circle-stroke-color': '#00FF00',
            'circle-stroke-width': 0.5,
            'circle-radius': 3
        }
    },)
})

map.on('click', 'vendors', function(e){
    let name = e.features[0].properties["USER_Name"];
    let type = e.features[0].properties["USER_Type"];
    let address = e.features[0].properties["USER_Address"];

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<h1>"+ name + '</h1> <br>' + type + '<br>' + address)
        .addTo(map);
});

map.on('mouseenter', 'vendors', function(){
    map.getCanvas().style.cursor = 'pointer';
    let name = e.features[0].properties["USER_Name"];
    let type = e.features[0].properties["USER_Type"];
    let address = e.features[0].properties["USER_Address"];

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<h3>"+ name + '</h3> <br>' + type + '<br>' + address)
        .addTo(map);
});
map.on('mouseleave', 'vendors', function(){
    map.getCanvas().style.cursor = '';
});