module.exports = {
    // configuration
    entry: ['bootstrap-loader','./src/client.js'],
    output: {
        path: './src/static/',
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        { test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'react'],
            plugins: ["transform-object-rest-spread",
            "transform-class-properties"]
          }
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
        },
        {
          test: /\.jpg$/,
          loader: "file-loader"
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        },
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }

      ]
    },
    devtool: 'source-map',
    watch: true
};
