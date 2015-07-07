var thermostat = new Thermostat();

var ShowingTemperature = function(){
  document.getElementById('temperature').innerHTML = thermostat.show();
  document.getElementById('temperature').style.color = 'orange';
};

var RaisingTemperature = function(){
  thermostat.up();
  document.getElementById('temperature').innerHTML=thermostat.show(); 
  if (thermostat.temperature > 17) { document.getElementById('temperature').style.color = 'orange';};
  if (thermostat.temperature > 24) { document.getElementById('temperature').style.color='red';};
};

var LoweringTemperature = function(){
  thermostat.down();
  document.getElementById('temperature').innerHTML=thermostat.show();
  if (thermostat.temperature < 25) { document.getElementById('temperature').style.color = 'orange';};
  if (thermostat.temperature < 18) { document.getElementById('temperature').style.color='lime';};
};

var ResettingTemperature = function(){
  thermostat.resetTemperature();
  document.getElementById('temperature').innerHTML=thermostat.show();
  if (thermostat.temperature > 17) { document.getElementById('temperature').style.color = 'orange';};
};

var PowerSavingMode = function(){
  thermostat.switchMode();
  document.getElementById('temperature').innerHTML=thermostat.show();
};