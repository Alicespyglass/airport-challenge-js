'use strict';
var Weather = function() {
  if (this.generate_weather <= 2) {
    this.report = true;
  } else {
    this.report =false;
  }
};

// Weather.prototype.report = function() {
//   return true };

Weather.prototype.generate_weather = function() {
  Math.floor(Math.random()*10);
}
