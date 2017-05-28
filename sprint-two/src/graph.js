// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graph.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (otherNode in this.graph) {
    this.removeEdge(otherNode, node);
  }

  if (this.graph.hasOwnProperty(node)) {
    delete this.graph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.graph[fromNode].length; i++) {
    if (this.graph[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].push(toNode);
  this.graph[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.graph[fromNode].splice(this.graph[fromNode].indexOf(toNode), 1);
  this.graph[toNode].splice(this.graph[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this.graph) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



