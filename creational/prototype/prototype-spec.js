describe('Prototype pattern', function() {
  var template;
  var prototype;
  var customer;
  beforeEach(function() {
    template = new Customer('enter...', 'enter...', 'pending');
    prototype = new CustomerPrototype(template);
    customer = prototype.clone();
  })
  it('Customer should be defined', function() {
    expect(Customer).toBeDefined();
  });


})