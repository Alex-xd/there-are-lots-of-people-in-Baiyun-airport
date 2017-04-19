var newman = require('newman');

newman.run({
    collection: require('./互联网加接口.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
});
