describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees celsius', function() {
    expect(thermostat.show()).toEqual(20);
  });

  describe('changing the temperature', function() {
    it('can be increased by 1', function() {
      thermostat.up();
      expect(thermostat.show()).toEqual(21);
    });

    it('can be decreased by 1', function() {
      thermostat.down();
      expect(thermostat.show()).toEqual(19);
    });
  });
});