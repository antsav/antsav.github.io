module.exports = function webpack(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-webpack');

    var path = require('path');
    var webpack = require('webpack');
    var path = path.resolve(__dirname, 'node_modules');

    // Options
    return {
        index: {
            entry: {
                app: './src/js/index.js',
                vendors: [
                    'react', 'react-dom'
                ],
            },
            output: {
                path: 'build/js',
                filename: 'index.js',
            },
            module: {
                loaders: [
                  {test: /\.json$/, loader: 'json-loader'},
                    {
                        test: /\.jsx$|\.js$/,
                        loader: 'babel-loader',
                        exclude: [path],
                        query: {
                            cacheDirectory: true,
                            presets: ['react', 'es2015'],
                            plugins: ['add-module-exports'], // 'transform-runtime'
                        },
                    },
                ],
            },
            plugins: [
                new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
            ],
        },

    };
};
