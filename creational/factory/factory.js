function EmployeeFactory() {
 this.createEmployee = function(type) {
     var employee;
   switch(type) {
     case 'fulltime' :
             employee = new FullTime();
       break;
     case 'temporary':
       employee = new Temporary();
       break;
     case 'parttime' :
       employee = new PartTime();
       break;
     case 'contractor' :
       employee = new Contractor();

   }
 }
}

function FullTime() {
  this.hourly = '$12';
}
function Temporary() {
  this.hourly = '$10'
}
function PartTime() {
  this.hourly = '$11';
}
function Contractor() {
  this.hourly = '$15';
}