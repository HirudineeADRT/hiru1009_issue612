module.exports = function() {
    this.clusters = [];

    this.clusters["test"] = {
        host: process.env.EndPoint_redisTest,
        port: 6379,
        clusterModeEnabled: false
    };
};