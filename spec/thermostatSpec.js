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

    it('not possible below 10', function() {
      for (counter = 20; counter > 0; counter--) {
        thermostat.down();
      };
      expect(thermostat.show()).toEqual(10);
    });
  });

  describe('powersaving mode', function() {
    it('is on powersaving mode by default', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('can be switched off', function() {
      thermostat.switchMode();
      expect(thermostat.powerSavingMode).toEqual(false);
    });

    it('limits max temp by 25 when on', function() {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.show()).toEqual(25);
    });

    it('has a maximum temp of 32 when off', function() {
      thermostat.switchMode();
      thermostat.temperature = 32;
      thermostat.up();
      expect(thermostat.show()).toEqual(32);
    });
  });

  it('can be reset', function() {
    thermostat.temperature = 32;
    thermostat.resetTemperature();
    expect(thermostat.show()).toEqual(20);
  });

  it('displays default temperature', function() {
    expect('#temperature').toContainText('20');
  });

});