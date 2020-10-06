exports.initCluster = (name) =>  {
    if (typeof name == "string") {
        cluster[name] = {};
    } else {
        cluster = name;
    }
    return cluster;
};