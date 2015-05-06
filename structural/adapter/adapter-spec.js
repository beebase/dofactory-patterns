describe('Adapter', function() {
  it('AdvancedShipping should be defined', function() {
    expect(AdvancedShipping).toBeDefined();
  });
  it('Shipping should be defined', function() {
    expect(Shipping).toBeDefined();
  });
  it('old request call', function() {
    var shipping = new Shipping();
    var cost = shipping.request('a', 'b', '$49.75');
    expect(cost).toBe('$49.75');
  });

  it('ShippingAdapter should be defined', function() {
    expect(ShippingAdapter).toBeDefined();
  });
  it('new request call', function() {
    var token = 'abc';
    var adapter = new ShippingAdapter(token);
    var cost = adapter.request('a', 'b', '$39.50');
    expect(cost).toBe('$39.50');
  })

})