$(document).ready(function() {
  var thermostat = new Thermostat();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(Math.round(data.main.temp) + "°C");
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(Math.round(data.main.temp) + "°C")
    })
  })

  function changeTemperature() {
    $('#temperature').text(thermostat.temperature + "°C")
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $('#temperature').text(thermostat.temperature + "°C")

  $('#temp-up').on('click', function() {
    thermostat.up();
    changeTemperature();
  })

  $('#temp-down').on('click', function() {
    thermostat.down();
    changeTemperature();
  })

  $('#temp-down').on('click', function() {
    thermostat.down();
    changeTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    changeTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.switchOnPowerSaving();
    $('#PSM-status').text('on');
    changeTemperature();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.switchOffPowerSaving();
    $('#PSM-status').text('off');
    changeTemperature();
  })

})
