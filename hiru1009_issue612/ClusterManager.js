module.exports = function() {
    this.clusters = [];

    this.clusters["hiruclustername"] = {
        host: process.env.EndPoint_redisHiruclustername,
        port: 6379,
        clusterModeEnabled: false
    };
};