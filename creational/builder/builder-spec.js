describe('Builder Pattern', function() {
  var shop;
  var carBuilder;
  var truckBuilder;
  var car;
  var truck;
  beforeEach(function() {
    shop = new Shop();
    carBuilder = new CarBuilder();
    truckBuilder = new TruckBuilder();
    car = shop.construct(carBuilder);
    truck = shop.construct(truckBuilder);
  });

  it('car.say()', function() {
    expect(car.say()).toBe('hello');
  });
});