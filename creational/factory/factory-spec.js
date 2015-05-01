describe('Factory pattern', function() {
  var fulltime;
  var parttime;
  var temporary;
  var contractor;
  beforeEach(function() {
    fulltime = new FullTime();
    parttime = new PartTime();
    temporary = new Temporary();
    contractor = new Contractor();
    employeeFactory = new EmployeeFactory();
  });

  it('fulltime should return $12', function() {
    expect(fulltime.hourly).toBe('$12')
  });
  it('parttime should return $11', function() {
    expect(parttime.hourly).toBe('$11')
  });
  it('temporary should return $10', function() {
    expect(temporary.hourly).toBe('$10')
  });
  it('contractor should return $15', function() {
    expect(contractor.hourly).toBe('$15')
  });
  it('employeeFactory.createEmployee("fulltime")', function() {
       var employee = employeeFactory.createEmployee('fulltime');
       expect(employee.hourly).toBe('$12');
     }
  )
});
