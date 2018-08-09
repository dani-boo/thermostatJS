'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // User story 1: thermostat starts at 20 degrees
  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // User story 2: increase temperature with up button
  it('increases temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  // User story 3: decrease temp with down button
  it('lowers temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })

  // User story 4: minimum temperature
  it('has a minimum of degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  // Powersaving mode
  it('starts out in powersaving mode', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  })

  it('can switch off powersaving mode', function() {
    thermostat.switchOffPowerSaving();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can switch on powersaving mode', function() {
    thermostat.switchOffPowerSaving();
    thermostat.switchOnPowerSaving();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  })

});


