describe('EmployeeFactory', function() {
  var employeeFactory;
  var employee;
  beforeEach(function() {
    employeeFactory = new EmployeeFactory();
    employee = employeeFactory.create('Maarten');
  });
  it('EmployeeFactory should be a function', function() {
    expect(typeof EmployeeFactory).toBe('function');
  });
  it('Employee should be defined', function() {
    expect(Employee).toBeDefined();
  });
  it('employeeFactory should be defined', function() {
    expect(employeeFactory).toBeDefined();
  });
  it('employeeFactory.create()', function() {
    expect(employeeFactory.create).toBeDefined();
  });
  it('employee.name()', function() {
    expect(employee.name).toBe('Maarten');
  });
  it('employee.say()', function() {
    expect(employee.say()).toEqual('I am employee Maarten');
  });
});

describe('VendorFactory', function() {
  var vendorFactory;
  var vendor;
  beforeEach(function() {
    vendorFactory = new VendorFactory();
    vendor = vendorFactory.create('Maarten');
  });
  it('VendorFactory should be a function', function() {
    expect(typeof VendorFactory).toBe('function');
  });
  it('Vendor should be defined', function() {
    expect(Vendor).toBeDefined();
  });
  it('vendorFactory should be defined', function() {
    expect(vendorFactory).toBeDefined();
  });
  it('vendorFactory.create()', function() {
    expect(vendorFactory.create).toBeDefined();
  });
  it('vendor.name()', function() {
    expect(vendor.name).toBe('Maarten');
  });
  it('vendor.say()', function() {
    expect(vendor.say()).toEqual('I am vendor Maarten');
  });
});