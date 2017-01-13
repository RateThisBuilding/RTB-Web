module.exports = {
    // configuration
    entry: './src/client.js',
    output: {
        path: './src/static/',
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    devtool: 'source-map'
};
