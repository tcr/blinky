var tessel = require('tessel');

var led1 = tessel.led(1).high();
var led2 = tessel.led(1).low();

setInterval(function () {
  led1.toggle();
  led2.toggle();
}, 100);
