/* A Queue object for queue-like functionality over JavaScript arrays. */
var Queue = function() {
    var vm = this;
    vm.items = [];

    vm.enqueue = function(obj) {
        vm.items.push(obj);
    };

    vm.dequeue = function() {
        return vm.items.shift();
    };

    vm.isEmpty = function() {
        return vm.items.length === 0;
    };
};


/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
var doBFS = function(graph, source) {
    var bfsInfo = {};

    for (var i = 0; i < graph.length; i++) {
        bfsInfo[i] = {
            distance: null,
            predecessor: null
        };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    while(!queue.isEmpty()) {
        var u = queue.dequeue();
        for(var i = 0; i<graph[u].length; i++) {
            var v = graph[u][i];
            if (bfsInfo[v].distance === null) {
               bfsInfo[v].distance = bfsInfo[u].distance + 1;
               bfsInfo[v].predecessor = u;
               queue.enqueue(v);
            }
        }
    }
    // Traverse the graph
    
    // As long as the queue is not empty:
    //  Repeatedly dequeue a vertex u from the queue.
    //  
    //  For each neighbor v of u that has not been visited:
    //     Set distance to 1 greater than u's distance
    //     Set predecessor to u
    //     Enqueue v
    //
    //  Hint:
    //  use graph to get the neighbors,
    //  use bfsInfo for distances and predecessors 
    
    return bfsInfo;
};


var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];
var bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}
