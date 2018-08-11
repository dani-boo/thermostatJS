$(document).ready(function() {
  var thermostat = new Thermostat();

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
