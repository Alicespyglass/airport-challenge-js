 'use strict';

describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('shows planes in hangar', function() {
    airport.land(plane);
    expect(airport.planes()).toEqual([plane])
  });

  describe('takeoff', function() {
    it('instructs planes to take off', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes()).toEqual([])
    });
  });

   describe('land', function() {
     it('instructs planes to land', function() {
       airport.land(plane);
     expect(airport._hangar).toContain(plane)
   });
  });

})
