var path = require('path');
var webpack = require('webpack');
var envFile = require('node-env-file');

// Set NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load config file for other env variables
try {
  envFile( path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
}catch (e) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components',
      './src/api'
    ],
    alias: {
      applicationStyle: 'src/styles/app.scss',
      actions: 'src/actions/actions.jsx',
      reducers: 'src/reducers/reducers.jsx',
      configureStore: 'src/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        // include: path.join(__dirname, 'src')
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        OTHER_VALUE: JSON.stringify(process.env.OTHER_VALUE),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
      }
    })
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV == 'production' ? undefined : 'cheap-module-eval-source-maps'
};
