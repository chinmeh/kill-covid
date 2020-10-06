helper = require('./helpers');

/**
 * Returns a node from the cluster
 * @param {*} cluster 
 * @param {*} node 
 */
exports.readNode = (cluster, node) => cluster[node];

/**
 * Adds a node to the cluster and updates the neighbouring nodes.
 * @param {*} node 
 * @param {*} cluster 
 */
exports.addNode = (node, cluster)  => {
    newNode = Object.entries(node);
    if (newNode.length != 1 || cluster.hasOwnProperty(newNode[0][0])) {
        return;
    }

    cluster[newNode[0][0]] = newNode[0][1];

    Object.entries(Object.values(node)[0]).forEach(element => {
        if (!element.hasOwnProperty(newNode[0][0])) {
            updateNode(element[0], element[1], newNode[0][0], cluster);
        }
    });
    return cluster;
}

/**
 * Deletes the given node if tree not broken
 * 
 * @param {*} node 
 * @param {*} cluster 
 */
exports.deleteNode = (node, cluster) => {
    newCluster = cluster;
    delete newCluster[node];
    for (const key in newCluster) {
        delete newCluster[key][node];
    }

    if(helper.doBfs(newCluster)) {
        return newCluster;
    } else {
        console.log("Cannot delete Node");
        return cluster;
    }
}

/**
 * Updates a given node with the new node an value
 */
updateNode = (node, value, newNode, cluster) => {
    cluster[node][newNode] = getNeighbourVal(value);
}

/**
 * Returns the hexagons neighbouring value
 */
getNeighbourVal = (val) => val >= 3 ? val - 3 : val + 3;
