module.exports = {
  
  entry: "./app/app.js",

  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
    devtool: "eval-source-map"
};