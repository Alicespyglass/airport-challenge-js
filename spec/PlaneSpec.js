'use strict';

describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('land', function() {
    it('instructs planes to land', function() {
      plane.land
      expect(plane.isLanded).toBe(true);
    });
  });

})
