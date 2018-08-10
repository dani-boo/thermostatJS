function Thermostat() {
  this.MIN_TEMP = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
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
}

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAX_TEMP;
  }
  return this.temperature === this.MAX_TEMP_PSM;
}

