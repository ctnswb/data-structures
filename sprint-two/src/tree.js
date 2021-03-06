var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var result = false;
  function checkTarget(tree){
    if (tree.value === target) {
      result = true;
    }
    if (tree.children.length > 0) {
      for (var i = 0 ; i < tree.children.length ; i++){
        checkTarget(tree.children[i]);
      }
    }
  }
  checkTarget(this);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild = O(1)
  contains = O(n)

 */