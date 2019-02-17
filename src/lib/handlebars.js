helpers = {};
const { format } = require('timeago.js');

helpers.timeago = (timestamp) => {
    return format(timestamp);
}

module.exports = helpers;