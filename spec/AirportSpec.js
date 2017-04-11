describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe('takeoff', function() {
    it('instructs planes to take off', function() {
      expect(airport.takeoff(plane)).toEqual(plane)
    });

    it('receives the method takeoff', function() {
      expect(airport.takeoff).toHaveBeenCalled();
    });
  });

});
