module.exports = function webpack(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-webpack');

    var path = require('path');
    var webpack = require('webpack');
    var node_modules_dir = path.resolve(__dirname, 'node_modules');

    // Options
    return {
        index:{
            entry: {
              app: './src/js/index.js',
              vendors: [
                  'react', 'react-dom','react-motion',
                  'superagent'
              ]
            },
            output: {
              path: 'build/js',
              filename: 'index.js'
            },
            module: {
              loaders: [
                  { test: /\.json$/, loader: "json-loader" },
                  {
                    test: /\.jsx$|\.js$/,
                    loader: 'babel-loader',
                    exclude: [node_modules_dir],
                    query: {
                        cacheDirectory: true,
                        presets: ['react', 'es2015'],
                        plugins: ["add-module-exports"] //'transform-runtime'
                    }
                  }
            ]
            },
            plugins: [
              new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
            ]
        }

    };

};
