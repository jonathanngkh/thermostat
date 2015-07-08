var thermostat = new Thermostat();

  var buttons = $('.controller_button');

  $('#temperature').html(thermostat.show());

  $('.powerSavingBox').change(function() {
    thermostat.switchMode();
  });

  var increaseTemperature = function() {
    thermostat.up();
    colorChanger();
    $('#temperature').html(thermostat.show());
  };

  var decreaseTemperature = function() {
    thermostat.down();
    colorChanger();
    $('#temperature').html(thermostat.show());
  };

  var resetTemp = function() {
    thermostat.resetTemperature();
    colorChanger();
    $('#temperature').html(thermostat.show());
  };

  var colorChanger = function() {
    var checkTemperature = thermostat.show();
    if (checkTemperature < 18) {
      $('#temperature').removeClass();
      $('#temperature').addClass('green');
    };
    if (checkTemperature > 24) {
      $('#temperature').removeClass();
      $('#temperature').addClass('red');
    }
    if (checkTemperature < 24 && checkTemperature > 17) {
      $('#temperature').removeClass();
      $('#temperature').addClass('orange');
    }
  };

$(buttons[0]).click(increaseTemperature);
$(buttons[1]).click(decreaseTemperature);
$(buttons[2]).click(resetTemp);


