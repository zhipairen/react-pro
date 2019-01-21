const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = () => ({
  stats: {
    entrypoints: false,
    children: false
 },
  entry: {
    index: path.join(__dirname, './src/app.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:4].js',
    chunkFilename: '[name].[chunkhash:4].js', // 按需加载，自动拆分文件
    publicPath: '/', // js,图片，字体等打包后的新路径，或 cdn地址
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader',
      //   }),
      // },
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     use: ['css-loader', 'less-loader'],
      //     fallback: 'style-loader',
      //   }),
      // },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
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
    ],
  },
  resolve: { // 解析模块配置
    extensions: [
      '.js', '.jsx', '.ts', '.tsx',
    ],
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
  devtool: !devMode ? 'inline-source-map' : 'cheap-module-source-map',
  mode: !devMode ? 'production' : 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true, // 404替代为index.html
    // host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
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
    // new ExtractTextPlugin({
    //   filename: 'styles.css',
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new webpack.DefinePlugin({ // 某些库在prod下有特定优化
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
