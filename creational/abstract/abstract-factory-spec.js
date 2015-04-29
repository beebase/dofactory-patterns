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
  it('employeeFactory should be defined', function() {
    expect(employeeFactory).toBeDefined();
  });
  it('employee.name should be Maarten', function() {
    expect(employee.name).toBe('Maarten');
  });
  it('employee.say()', function() {
    expect(employee.say()).toEqual('I am employee Maarten');
  });
});