# Blinky LED example

Getting ready...

```javascript
var tessel = require('tessel');

var led1 = tessel.led(1).output().high();
var led2 = tessel.led(2).output().low();

setInterval(function () {
  led1.toggle();
  led2.toggle();
}, 100);
```
