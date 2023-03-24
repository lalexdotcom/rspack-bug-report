const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};