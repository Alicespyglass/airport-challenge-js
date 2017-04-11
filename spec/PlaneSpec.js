'use strict';

describe('Plane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['land','takeoff']);
  });

  describe('land', function() {
    it('instructs planes to land', function() {
      plane.land(airport);
      expect(airport.land).toHaveBeenCalledWith(plane);
    });
  });

  describe('takeoff', function() {
    it('instructs planes to take off', function() {
      plane.takeoff(airport);
      expect(airport.takeoff).toHaveBeenCalledWith(plane);
    });
  });

})
