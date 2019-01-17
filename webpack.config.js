const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => ({
  entry: {
    index: path.join(__dirname, './src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:4].js',
    chunkFilename: '[name].[chunkhash:4].js', // 按需加载，自动拆分文件
    publicPath: './', // js,图片，字体等打包后的新路径，或 cdn地址
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
    ],
    externals: { // 指明不需要被webpack打包进最后bundle的模块
      moment: true,
    },
  },
  resolve: { // 解析模块配置
    alias: { // 别名设置，好处：webpack不需要解析node_modules中内容
      '@': './test.js',
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devtool: env === 'production' ? 'inline-source-map' : 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true, // 404替代为index.html
    host: '0.0.0.0',
    hot: true,
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({ // 某些库在prod下有特定优化
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
