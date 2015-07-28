function CustomerPrototype(proto) {
  this.proto = proto;
  this.clone = function() {
    var cust = new Customer();
    cust.first = proto.first;
    cust.last = proto.last;
    cust.status = proto.status;

    return cust;
  }
}

function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;
  this.say = function() {
    console.log('name: ' + this.first + ' ' +
                this.last + ', status: ' +
                this.status);
  }
}

function run() {
  var proto = new Customer('Maarten', 'Berkenbosch', 'pending');
  var custPrototype = new CustomerPrototype(proto);
  var customer = custPrototype.clone(proto);
  customer.say()
}
run();