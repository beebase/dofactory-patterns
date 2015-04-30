describe('Builder Pattern', function() {
  var shop;
  beforeEach(function() {
    shop = new Shop();
  });
  describe('CarBuilder', function() {
    var carBuilder;
    var car;
    beforeEach(function() {
      carBuilder = new CarBuilder();
      car = shop.construct(carBuilder);
    });
    it('CarBuilder should be defined', function() {
      expect(CarBuilder).toBeDefined();
    });

    it('car.doors', function() {
      expect(car.doors).toBe(4);
    })
    it('car.say()', function() {
      expect(car.say()).toBe('I am a 4-door car.');
    });
  });
  describe('TruckBuilder', function() {
    var truckBuilder;
    var truck;
    beforeEach(function() {
      truckBuilder = new TruckBuilder();
      truck = shop.construct(truckBuilder);
    })
    it('truck.doors', function() {
      expect(truck.doors).toBe(2);
    })
    it('truck.say()', function() {
      expect(truck.say()).toBe('I am a 2-door truck.');
    })
  })
});