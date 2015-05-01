// creator
function EmployeeFactory() {
  this.createEmployee = function(type) {
    var employee;
    if (type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }

    employee.type = type;
    employee.say = function() {
      log.add(this.type + ': rate ' + this.hourly + '/hour');
    };

    return employee;
  }
}

// products
var FullTime = function() {
  this.hourly = '$12';
};

var PartTime = function() {
  this.hourly = '$11';
};

var Temporary = function() {
  this.hourly = '$10';
};
var Contractor = function() {
  this.hourly = '$15';
};

// log helper
var log = (function() {
  var result = '';
  return {
    add : function(msg) {
      result += msg + '\n';
    },
    show: function() {
      console.log(result);
      result = '';
    }
  }
})();

function run() {
  var employees = [];
  var employeeFactory = new EmployeeFactory();

  employees.push(employeeFactory.createEmployee('fulltime'));
  employees.push(employeeFactory.createEmployee('parttime'));
  employees.push(employeeFactory.createEmployee('temporary'));
  employees.push(employeeFactory.createEmployee('contractor'));

  for (var i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }

  log.show();
}
run();
