exports.handler = function (event, context, callback) {
    // You must always quit the redis client after it's used


    callback(null, { "message": "Successfully executed" });
}