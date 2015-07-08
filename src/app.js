var thermostat = new Thermostat();

  var buttons = $('.controller_button');

  var name = 'London'

  var cityTemperature = function() {
    $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + name + '&units=metric',
    function(responseObject) {
      $('#cityWeather').html(responseObject.list[0].main.temp);
      $('#cityActual').html(responseObject.list[0].name);
    });
  };

  $('#citySubmit').click(function() {
    name = $('#cityForm').val();
    cityTemperature();
  });

  cityTemperature();

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