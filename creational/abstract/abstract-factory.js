function VendorFactory() {
  this.create = function(name){
    return new Vendor(name);
  }
}
function Vendor (name) {
  this.name = name;
  this.say = function() {
    return 'I am vendor ' + this.name;
  }
}

function EmployeesFactory() {
  this.create = function (name) {
    return new Employee(name) ;
  }
}

function Employee (name ) {
  this.name = name;
  this.say = function() {
    return 'I am employee ' + this.name;
  }
}