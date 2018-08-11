'use strict'

function Thermostat() {
  this.MIN_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MED_TEMP_USAGE = 18;
  this.MAX_TEMP_PSM = 25;
  this.MAX_TEMP = 32;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isPowerSavingOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPowerSaving = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSaving = function() {
  this.powerSavingMode = true;
  if (this.getCurrentTemperature() > 25) {
    this.reset(); 
  }
}

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAX_TEMP;
  }
  return this.temperature === this.MAX_TEMP_PSM;
}

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MED_TEMP_USAGE) {
    return 'low';
  }
  if (this.temperature > this.MAX_TEMP_PSM) {
    return 'high';
  }
  return 'medium';
};
