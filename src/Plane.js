'use strict';
var Plane = function() {
  this.isLanded = false;
};

Plane.prototype.land = function() {
  this.isLanded = true;
};
