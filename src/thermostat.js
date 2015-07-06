var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.show = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.powerSavingMode && this.temperature < 25) {
    this.temperature += 1;
  };
  if (!this.powerSavingMode && this.temperature < 32) {
    this.temperature += 1;
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.switchMode = function() {
  this.powerSavingMode = !this.powerSavingMode
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};