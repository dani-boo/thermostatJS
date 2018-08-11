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
  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  // Powersaving mode
  describe('powersaving mode', function() {
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

    it('resets to default temperature if PSM is switched on when above 25 degrees', function() {
      thermostat.switchOffPowerSaving();
      for(var i = 0; i < 13; i++) { thermostat.up(); }
      thermostat.switchOnPowerSaving();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })
  })

  // User story 5: max temp on PSM
  it('has a max of 25 on PSM', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  })

  // User story 6
  it('has a max temp of 32 without PSM', function() {
    thermostat.switchOffPowerSaving();
    for (var i = 0; i < 13; i++) {
    thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('goes to default temperature of 20 when reset()', function() {
    for(var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  describe('display energy usage', function() {
    describe('when temp is below 18 degrees', function() {
      
      it('usage is low', function() {
        // use for loop to get it lower than 18 - remember that it starts at 20
        for(var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low');
      });
    });
    
    describe('when temp is between 18 and 25 degrees', function() {
      
      it('usage is medium', function() {
        expect(thermostat.energyUsage()).toEqual('medium');
      });
    });
    
    describe('when temp is above 25 degrees', function() {
      
      it('usage is high', function() {
        thermostat.switchOffPowerSaving();
        // use for loop to get it higher than 25 - remember that it starts at 20
        for(var i = 0; i < 6; i++) {
           thermostat.up();
         }
         expect(thermostat.energyUsage()).toEqual('high');
      });
    });
  });
});


