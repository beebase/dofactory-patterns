//input
var Gestures = function(output) {
  this.output = output;
  this.tap = function() {
    this.output.click();
  };
  this.swipe = function() {
    this.output.move();
  };
};

var Mouse = function(output) {
  this.output = output;
  this.click = function() {
    this.output.click();
  };
  this.move = function() {
    this.output.move();
  }
};

var Screen = function() {
  this.click = function() {
    log.add('screen select');
  };
  this.move = function() {
    log.add('screen move');
  }
};

var Audio = function() {
  this.click = function() {
    log.add('audio clicked');
  };
  this.move = function() {
    log.add('audio moved');
  }
};

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
  var screen = new Screen();
  var audio = new Audio();

  var hand = new Gestures(screen);
  var mouse = new Mouse(screen);


  hand.tap(screen);
  hand.swipe(screen);
  mouse.click(screen);
  mouse.move(screen);

  hand.tap(audio);
  hand.swipe(audio);
  mouse.click(audio);
  mouse.move(audio);

  log.show();

}
run();