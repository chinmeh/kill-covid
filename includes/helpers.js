/**
 * Runs a breadth first search to traverse the cluster and returns false is graph is broken
 * @param {*} cluster 
 */

exports.doBfs = (cluster) => {
    visited = [];
    graph = new Object;
    let vertices = Object.keys(cluster);
    let edges = Object.values(cluster);
    start = vertices[0];

    vertices.forEach(vertex => {
        if (typeof graph[vertex] === "undefined") {
            graph[vertex] = [];
        }
        visited.push(vertex);
        adj = Object.keys(cluster[vertex]);
        adj.forEach(edge => {
            if(typeof graph[vertex] !== 'undefined' && typeof graph[edge] === 'undefined') {
                graph[vertex].push(edge);
            }
        });
    });

    if (vertices.length == Object.keys(graph).length) {
        return true;
    } else {
        return false;
    }
}