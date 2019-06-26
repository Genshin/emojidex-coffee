import path from 'path'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import FixStyleOnlyEntriesPlugin from 'webpack-fix-style-only-entries'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const devMode = process.env.NODE_ENV !== 'production';

module.exports = (env, argv) => ({
  entry: {
    'js/emojidex': './src/es6/index.js',
    'css/emojidex': './src/sass/emojidex.scss',
    'css/document': './src/sass/document.scss'
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    filename: `[name].${argv.mode === 'production' ? 'min.' : ''}js`,
    path: path.join(__dirname, './docs'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg|png)$/i,
        use: [
          'url-loader',
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['cover 99.5%']
                }),
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /(jquery-ui\.min|jquery\.caret\.min)\.js$/,
        use: ['script-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pug/index.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'ajax_test.html',
      template: 'src/pug/ajax_test.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: '../build/spec/fixture/index.html',
      template: 'spec/fixture/index.pug',
      inject: false
    }),
    new FixStyleOnlyEntriesPlugin({
      extensions: ['sass', 'scss']
    }),
    new MiniCssExtractPlugin({
      filename: `[name].${argv.mode === 'production' ? 'min.' : ''}css`
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: { baseDir: ['docs'] },
      // browser: ['google chrome', 'google-chrome', 'firefox']
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   'window.$': 'jquery'
    // })
  ],
  node: {
    fs: 'empty'
  }
})