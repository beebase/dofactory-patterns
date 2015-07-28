describe('Gestures', function() {
  it('Gestures should be defined', function() {
    expect(Gestures).toBeDefined();
  });
  it('Mouse should be defined', function() {
    expect(Mouse).toBeDefined();
  });
  it('Screen should be defined', function() {
    expect(Screen).toBeDefined();
  });
  it('Audio should be defined', function() {
    expect(Audio).toBeDefined();
  })

  var screen;
  var audio;
  var hand;
  var mouse;
  beforeEach(function() {
    screen = new Screen();
    audio = new Audio();
    hand = new Gestures();
    mouse = new Mouse();
  });

  it('hand.tap("screen")', function() {
    mouse.click(screen);
    log.show();
    //expect()
  })

});
