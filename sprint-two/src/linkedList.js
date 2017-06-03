var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var formerHead = list.head;
      list.head = formerHead.next;
      return formerHead.value;
    } else {
      return 'The list is empty!';
    }
  };

  list.contains = function(target) {
    var found = false;
    var checkNodeValue = function(node) {
      if (!found) {
        if (node.value === target) {
          found = true;
        } else {
          if (node.next !== null) {
            checkNodeValue(node.next);
          }
        }
      }
    };
    checkNodeValue(list.head);
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */
