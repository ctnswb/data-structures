var DoublyLinkedList = function() {
  var dList = {};
  dList.head = null;
  dList.tail = null;

  dList.addToTail = function(value) {

    var newTail = DoubleNode(value);
    if (dList.tail === null) {
      dList.tail = newTail;
      dList.head = dList.tail;
    } else {
      newTail.previous = dList.tail;
      dList.tail.next = newTail;
      dList.tail = newTail;
    }
  };

  dList.removeHead = function() {

    var headValue = null;
    if (dList.head !== null) {
      headValue = dList.head.value;
      if (dList.head.next === null) {
        dList.head = null;
        dList.tail = null;
      } else {
        var newHead = dList.head.next;
        newHead.previous = null;
        dList.head.next = null;
        dList.head = newHead;
      }
    }
    return headValue;
  };

  dList.contains = function(value) {
    var found = false;

    function checkNode(node){
      if (node.value === value) {
        found = true;
      }
      if (node.next !== null) {
        checkNode(node.next);
      }
    }

    if (dList.head !== null) {
      checkNode(dList.head);
    }
    return found;
  };

  dList.addToHead = function(value) {

    var newHead = DoubleNode(value);
    if (dList.head === null) {
      dList.head = newHead;
      dList.tail = newHead;
    } else {
      newHead.next = dList.head;
      dList.head.previous = newHead;
      dList.head = newHead;
    }
  };

  dList.removeTail = function() {

    var tailValue = null;
    if (dList.tail !== null) {
      tailValue = dList.tail.value;
      if (dList.tail.previous === null) {
        dList.tail = null;
        dList.head = null;
      } else {
        var newTail = dList.tail.previous;
        newTail.next = null;
        dList.tail.previous = null;
        dList.tail = newTail;
      }
    }
    return tailValue;
  };

  return dList;
};

var DoubleNode = function(value) {
  var dNode = {};
  dNode.value = value;
  dNode.next = null;
  dNode.previous = null;

  return dNode;
};