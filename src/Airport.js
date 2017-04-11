 'use strict';
 var Airport = function() {
   this._hangar = [];
 };

 Airport.prototype.planes = function() { return this._hangar; };

 Airport.prototype.takeoff = function(plane) {
   this._hangar.pop(plane);
 };
  Airport.prototype.land = function(plane) {
    this._hangar.push(plane)
     };
