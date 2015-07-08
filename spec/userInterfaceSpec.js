describe('Thermostat', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('webapp.html');
    $.holdReady(false);
  });

  it('displays default temperature', function() {
    expect('#temperature').toContainText('20');
  });
});