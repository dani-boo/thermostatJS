function Thermostat() {
  this.MIN_TEMP = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
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

// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
