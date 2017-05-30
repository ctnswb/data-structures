var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.left = null; // a tree
  bst.right = null;

  bst.insert = function(value) {
   if (value < bst.value) {
      if (bst.left !== null) {
        bst.left.insert(value);
      } else {
         bst.left = BinarySearchTree(value);
      }
   } else if (value > bst.value) {
      if (bst.right !== null) {
        bst.right.insert(value);
      } else {
        bst.right = BinarySearchTree(value);
      }
   }
  };

  bst.contains = function(value) {
    if (bst.value === value) {
      return true;
    } else if (bst.value < value && bst.right !== null) {
      return bst.right.contains(value);
    } else if (bst.value > value && bst.left !== null) {
      return bst.left.contains(value);
    } else {
      return false;
    }
  };

  bst.depthFirstLog = function(callback) {
    callback(bst.value);

    if (bst.left !== null) {
      bst.left.depthFirstLog(callback);
    }
    if (bst.right !== null) {
      bst.right.depthFirstLog(callback);
    }
  };

  return bst;
}


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n)
contains: O(log n)
depthFirstLog: O(n)
 */
