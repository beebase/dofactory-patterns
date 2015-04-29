// product
function Employee(name) {
  this.name = name;
  this.say = function() {
    return 'I am employee ' + this.name;
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
    return 'I am vendor ' + this.name;
  };
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  };
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
  };
})();

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('Joan'));
  persons.push(employeeFactory.create('Tim'));
  persons.push(vendorFactory.create('Gerald'));
  persons.push(vendorFactory.create('Nicole'));

  for (var i = 0, len = persons.length; i < len; i++) {
    log.add(persons[i].say());
  }

  log.show();
}

run();