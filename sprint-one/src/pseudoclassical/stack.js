var Stack = function() {
  this.storage= {};
  this.stackSize = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  var deletedValue = this.storage[this.stackSize - 1];
  if (this.stackSize > 0) {
    delete deletedValue;
    this.stackSize--;
  }
  return deletedValue;
};

Stack.prototype.size = function() {
  return this.stackSize;
};