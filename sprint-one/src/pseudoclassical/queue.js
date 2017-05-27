var Queue = function() {
  this.queueSize = 0;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  var deletedValue = this.storage[this.head];
  if (this.queueSize > 0) {
    delete deletedValue;
    this.head++
    this.queueSize--;
  }
  return deletedValue;
};