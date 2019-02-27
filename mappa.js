let gps = {
  lat: 0,
  long: 0,
  acc: 0
}
let gpsCanvasPos = {};
let posData = {};
let myMap = {};
let canvas = {};
let locationP = {};
const mappa = new Mappa('Leaflet');
const options = {
  lat: 55,
  lng: 12,
  zoom: 8,
  style: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
}
 //style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
 //style : "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
const watchOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
const key = 'pk.eyJ1IjoibWFwcGF1c2VyIiwiYSI6ImNqNXNrbXIyZDE2a2cyd3J4Ym53YWxieXgifQ.JENDJqKE1SLISxL3Q_T22w';

function setup() {
  posData = watchPosition(gpsPrint, watchOptions)
  canvas = createCanvas(640, 640);
  locationP = createP();
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)

  // Add a color to our ellipse
  fill(200, 100, 100);

  // Only redraw the point when the map changes and not every frame.
  myMap.onChange(drawMap);
}

function gpsPrint(locationData) {

  gps.lat = locationData.latitude;
  gps.long = locationData.longitude;
  gps.acc = locationData.accuracy;
  locationP.html("lat : " + gps.lat + " long : " + gps.long + " acc : " +
                 round(gps.acc) + " Speed : "+ locationData.speed + " Heading : "+
                 locationData.heading);
 
}

function drawMap() {
  clear();
  gpsCanvasPos = myMap.latLngToPixel(gps.lat, gps.long);
  ellipse(gpsCanvasPos.x, gpsCanvasPos.y, gps.acc);
}



function draw() {

}
