var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.storage = {};
  newQueue.head = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.queueSize;
};

queueMethods.enqueue = function(value){
  this.storage[this.head+this.queueSize] = value;
  this.queueSize++;
}

queueMethods.dequeue = function(){
  var deletedValue = this.storage[this.head];
  if (this.queueSize > 0) {
    delete deletedValue;
    this.head++;
    this.queueSize--;
  }
  return deletedValue;
}