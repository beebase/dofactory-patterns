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
    it('Shop should be defined', function() {
      expect(Shop).toBeDefined();
    });
    it('CarBuilder should be defined', function() {
      expect(CarBuilder).toBeDefined();
    });
    it('carbuilder.step1() should be defined', function() {
      expect(carBuilder.step1).toBeDefined();
    })
    it('carbuilder.step2() should be defined', function() {
      expect(carBuilder.step2).toBeDefined();
    })
    it('builder.get() should be defined', function() {
      expect(carBuilder.get).toBeDefined();
    })   ;
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
    });
    it('Shop should be defined', function() {
      expect(Shop).toBeDefined();
    });
    it('TruckBuilder should be defined', function() {
      expect(TruckBuilder).toBeDefined();
    });
    it('truckBuilder.step1() should be defined', function() {
      expect(truckBuilder.step1).toBeDefined();
    })
    it('truckBuilder.step2() should be defined', function() {
      expect(truckBuilder.step2).toBeDefined();
    })
    it('truckBuilder.get() should be defined', function() {
      expect(truckBuilder.get).toBeDefined();
    })   ;
    it('truck.doors', function() {
      expect(truck.doors).toBe(2);
    })
    it('truck.say()', function() {
      expect(truck.say()).toBe('I am a 2-door truck.');
    });
  })
});