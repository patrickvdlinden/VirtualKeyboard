const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: {
        'virtual-keyboard': './src/scripts/virtual-keyboard.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'virtual-keyboard.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: [
                    'babel-loader',
                    'ts-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/img' }
            ]
        }),
        new MiniCssExtractPlugin(),
        new StylelintPlugin(),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ],
        alias: {
            '/scripts': path.resolve('src/scripts'),
            '/styles': path.resolve('src/styles'),
            '/img': path.resolve(__dirname, 'src/img')
        }
    }
};

module.exports = config;
