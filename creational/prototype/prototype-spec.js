describe('Prototype pattern', function() {
  var template;
  var prototype;
  var customer;
  beforeEach(function() {
    template = new Customer('enter...', 'enter...', 'pending');
    prototype = new CustomerPrototype(template);
    customer = prototype.clone();
  })
  it('CustomerPrototype should be defined', function() {
    expect(CustomerPrototype).toBeDefined();
  })

  it('Customer should be defined', function() {
    expect(Customer).toBeDefined();
  });
  it('customer.first', function() {
    expect(customer.first).toBeDefined();
  })
  it('customer.last', function() {
    expect(customer.last).toBeDefined();
  })
  it('customer should equal template', function() {
    expect(customer.first).toEqual(template.first);
  })

});