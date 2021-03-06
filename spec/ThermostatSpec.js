describe("Thermostat", function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('has a default temperature of 18 degrees', function() {
    expect(thermostat.temperature).toEqual(18);
  })

  it('has power save mode setting switched on as a default', function() {
    expect(thermostat.powerSaveMode).toEqual(true);
  })

  describe('If power save mode is on', function(){

    it('has a maximum temperature of 25', function() {
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('has a minimum temperature of 12', function() {
      expect(thermostat.minimumTemperature()).toEqual(12);
    })

  })

  describe('If power save mode is off', function() {

    it('has a maximum temperature of 35', function() {
      thermostat.powerSaveMode = false;
      expect(thermostat.maximumTemperature()).toEqual(35);
    })

    it('has a minimum temperature of 10', function() {
      thermostat.powerSaveMode = false;
      expect(thermostat.minimumTemperature()).toEqual(10);
    })
 
  })

  describe('The temperature', function() {

    it('can increase by 1 degree', function() {
      expect(thermostat.temperature).toEqual(18);
      thermostat.warmer();
      expect(thermostat.temperature).toEqual(19);
    })

    it('can decrease by 1 degree', function() {
      expect(thermostat.temperature).toEqual(18);
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(17);
    })

    it('can not decrease if temperature is less than or equal to the minimum', function () {
      thermostat.powerSaveMode = false;
      thermostat.temperature = 10;
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(10);
    })

    it('can not increase if the temperature is greater than or equal to the maximum', function() {
      thermostat.powerSaveMode = false;
      thermostat.temperature = 35;
      thermostat.warmer();
      expect(thermostat.temperature).toEqual(35);
    })

  })

  describe('Reset button', function() {

    it('restores the thermostat back to default temperature setting', function() {
      thermostat.temperature = 25;
      expect(thermostat.temperature).toEqual(25);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(18);
    })
  })

  describe('The colour', function() {

    it('shows blue if less than 18', function() {
      thermostat.temperature = 15;
      expect(thermostat.status()).toEqual("blue");
    })

    it('shows orange if less than 25', function () {
      thermostat.temperature = 23;
      expect(thermostat.status()).toEqual("orange");
    })

    it('shows red if anything else', function() {
      thermostat.temperature = 33;
      expect(thermostat.status()).toEqual("red");
    })

  })


});

 
