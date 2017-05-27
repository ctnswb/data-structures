var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.stackSize;
};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  var deletedValue = this.storage[this.stackSize-1];
  if (this.stackSize > 0) {
    delete deletedValue;
    this.stackSize--;
  }
  return deletedValue;
};
