'use strict';

describe('Weather', function() {

  var weather;
  var generate_weather;

  beforeEach(function() {
    weather = new Weather( );
  });

  it('returns true if generate weather <= 2', function() {
    var generate_weather = 2;
    expect(weather.report).toEqual(true);
  });
})
