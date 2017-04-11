 'use strict';

describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe('takeoff', function() {
    it('instructs planes to take off', function() {
      expect(airport.takeoff(plane)).toEqual(plane)
    });
  });

   describe('land', function() {
     it('instructs planes to land', function() {
    airport.land(plane);
     expect(airport._hangar).toContain(plane)
    });
   });


});
