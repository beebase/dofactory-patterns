(function() {
  'use strict';
  // director
  function Shop() {
    this.construct = function(builder) {
      builder.step1();
      builder.step2();
      return builder.get();
    }
  }

  //  builder
  function CarBuilder() {
    this.car = null;
    this.step1 = function() {
      this.car = new Car();
    };
    this.step2 = function() {
      this.car.addParts();
    };
    this.get = function() {
      return this.car;
    };
  }

  // builder
  function TruckBuilder() {
    this.truck = null;
    this.step1 = function() {
      this.truck = new Truck();
    };
    this.step2 = function() {
      this.truck.addParts();
    };
    this.get = function() {
      return this.truck;
    }
  }

  // products
  function Car() {
    this.doors = 0;
    this.addParts = function() {
      this.doors = 4;
    };
    this.say = function() {
      log.add('I am a ' + this.doors + '-door car');
    };
  }

  function Truck() {
    this.doors = 0;
    this.addParts = function() {
      this.doors = 2;
    };
    this.say = function() {
      log.add('I am a ' + this.doors + '-door truck');
    };
  }

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

  // run
  function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);
    car.say();
    truck.say();
    log.show();
  }

  run();

})();