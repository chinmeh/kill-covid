const node = require('./includes/node');
const city = require('./includes/cluster');

var cluster = city.initCluster({
    Ax :{Bx:1},
    Bx :{Ax:4, Dx:2},
    Dx :{Bx:5, Ex:3},
    Ex :{Dx:3}
});

cluster = node.addNode({Nx: {Ax: 5, Bx: 0, Dx : 1, Ex : 2}}, cluster);
console.log("Adding new node : Nx ",cluster);

console.log("Querying new node : Nx ",node.readNode(cluster, "Nx"));

cluster = node.deleteNode("Nx", cluster);
console.log("Deleting new node : Nx ",cluster);
