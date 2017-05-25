var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    size++;
    tail++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var deletedValue = storage[head];
      delete deletedValue;
      size--;
      head++;
      return deletedValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};