var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this.contains(item)){
    delete this._storage[item];
  } else {
    return ('Error! The value doesn\'t exist in the set.');
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add = O(1)
 contains = O(n)
 remove = O(1)
 */