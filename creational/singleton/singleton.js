var Singleton = (function() {
  var instance;

  function createInstance() {
    return new Object('hello');
  }

  return {
    getInstance: function() {
      if (!instance) {
        createInstance();
      }
      return instance;
    }
  }
})();

function run() {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  console.log(instance1 === instance2);
}

run();