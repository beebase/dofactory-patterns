describe('Singleton pattern', function() {
  var instance1;
  var instance2;
  beforeEach(function() {
    instance1 = Singleton.getInstance();
    instance2 = Singleton.getInstance();
  });
  it('Singleton should be defined', function() {
    expect(Singleton).toBeDefined();
  });
  it('should be one instance', function() {
    expect(instance1).toBe(instance2);
  });
});