const path = require('path');

module.exports = {
staticPath: process.env.STATIC_PATH ?? package.join(__dirname, '../public') ,
}