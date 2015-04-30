function Shop() {
  this.construct = function(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

function CarBuilder() {
  this.car = null;
  this.step1 = function() {
    this.car = new Car();
  }
  this.step2 = function() {
    this.car.addParts();
  }
  this.get = function() {
    return this.car;
  }
}

function Car() {
  this.doors = 0;
  this.addParts = function() {
    this.doors = 4;
    this.say = function() {
      return 'I am a ' + this.doors + '-door car.';
    }
  }
}

function TruckBuilder() {
  this.truck = null;
  this.step1 = function() {
    this.truck = new Truck();
  }
  this.step2 = function() {
    this.truck.addParts();
  }
  this.get = function() {
    return this.truck;
  }
}
function Truck () {
  this.doors =0;
  this.addParts = function() {
    this.doors = 2;
  }
  this.say = function(){
    return 'I am a ' + this.doors + '-door truck.';
  }

}