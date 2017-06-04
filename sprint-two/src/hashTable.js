var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
    this._tupleCount++;
  } else {
    var inserted = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        inserted = true;
      }
    }
    if (!inserted) {
      bucket.push([k, v]);
      this._tupleCount++;
    }
  }

  if (this._tupleCount / this._limit >=  0.75) {
    this.rebuild(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        removed = true;
        this._tupleCount--;
      }
    }
  }
  else {
    return 'Error! Key doesn\'t exist in hash table.';
  }

  if (this._tupleCount / this._limit < 0.25) {
    this.rebuild(this._limit / 2);
  }
};

HashTable.prototype.rebuild = function(newLimit) {

  var buckets = [];

  this._storage.each( function(bucket, index) {
    if (bucket) {
      buckets.push(bucket);
    }
  });

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < buckets.length; i++) {
    for (var j = 0; j < buckets[i].length; j++) {
      this._tupleCount--;
      this.insert(buckets[i][j][0], buckets[i][j][1]);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(1)
 retrieve = O(1)
 remove = O(1)
 */


