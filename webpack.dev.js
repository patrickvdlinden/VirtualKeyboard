const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    entry: {
        'virtual-keyboard': ['./src/scripts/virtual-keyboard.ts', './tests/main.ts']
    }
});
