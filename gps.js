let posData = {};
let plat = {};
let plong = {};
let pacc = {};
let palt = {};
let paltAcc = {};
let pheding = {};
let pspeed = {};
let pfence = {};

function setup() {
  if (geoCheck() == true) {
    pfence = createP();
    plat = createP();
    plong = createP();
    pacc = createP();
    palt = createP();
    paltAcc = createP();
    pheding = createP();
    pacc = createP();
    pspeed = createP();
    posData = intervalCurrentPosition(gpsPrint, 5000)
    fence =  new geoFenceCircle(55.6826599, 11.89310, 0.010, inde, ude, 'km');
  } else {
    createP("Ingen Koprdinat Data");
  }

}
function inde(){
  pfence.html("Inde")
}

function ude(){
  pfence.html("Ude");
}

function gpsPrint(locationData) {

  plat.html("latitude :" + locationData.latitude);
  plong.html("longitude :" + locationData.longitude);
  pacc.html("accuracy : " + locationData.accuracy);
  palt.html("Altitude :" + locationData.altitude);
  paltAcc.html("Alt Acc :" + locationData.altitudeAccuracy);
  pheding.html("heading :" + locationData.heading);
  pspeed.html("Speed : " + locationData.speed);

}
