 'use strict';
 var Airport = function() {
   this._hangar = [];
 };

 Airport.prototype.takeoff = function(plane) {
   return plane;
 };
  Airport.prototype.land = function(plane) {
    this._hangar.push(plane)
     };
