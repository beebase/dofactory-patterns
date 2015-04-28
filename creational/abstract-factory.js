// product
function Employee(name) {
  this.name = name;
  this.say = function() {
    log.add('I am employee ' + name);
  };
}

// concrete factory
function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name);
  };
}

// product
function Vendor(name) {
  this.name = name;
  this.say = function() {
    log.add('I am vendor ' + name);
  }
}


function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  }
}

var log = (function() {
  'use strict';
  var log = '';
  return {
    add : function(msg) {
      log += msg + '\n';
    },
    show: function() {
      console.log(log);
      log = '';
    }
  }
})();

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('Joan'));
  persons.push(employeeFactory.create('Tim'));
  persons.push(employeeFactory.create('Gerald'));
  persons.push(employeeFactory.create('Nicole'));

  for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
  }

  log.show();
}

run();