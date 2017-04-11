'use strict';
var Plane = function() {
  this.location = []
};

Plane.prototype.land = function(airport) {
  airport.land(this);
  this.location.push(airport);
};

Plane.prototype.takeoff = function(airport) {
  airport.takeoff(this);
  this.location.pop;
}
