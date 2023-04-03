const path = require('path');

const DisplayStatsPlugin = require("./stats-plugin")

module.exports = {
    entry: './index.js',
    mode: 'development',
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [DisplayStatsPlugin]
};