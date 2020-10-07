const node = require('./includes/node');
const city = require('./includes/cluster');

var cluster = city.initCluster({
    C :{A:4},
    A :{C:1, Z:3},
    Z :{A:0, Y:2, X:3},
    Y :{Z:5, X:4, V:3, W:2},
    X :{Z:0, Y:1, V:2},
    V :{Y:0, W:1, X:5},
    W :{S:1, V:4, Y:5},
    S :{E:0, W:4},
    E :{S:3}
});

cluster = node.addNode({N: {E: 5, C : 2}}, cluster);
console.log("Adding new node : N ",cluster);

console.log("Querying new node : N ",node.readNode(cluster, "N"));

cluster = node.deleteNode("A", cluster);
console.log("Deleting new node : A ",cluster);

console.log("Trying to delete the only link N ");
cluster = node.deleteNode("N", cluster);
console.log("Deleting new node : N ",cluster);