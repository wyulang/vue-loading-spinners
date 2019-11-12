var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const chalk = require('chalk');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vueLoadingNew.js',
    library: 'vueLoadingNew',
    libraryTarget: 'umd'
  },
  optimization: {
    noEmitOnErrors: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: { plugins: [require("autoprefixer")] }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }, {
            loader: "postcss-loader",
            options: { plugins: [require("autoprefixer")] }
          }, {
            loader: "less-loader",
          }
        ]
      },
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `vueLoadingNew.css`
    }),
    new ProgressBarPlugin(
      {
        format: chalk.blueBright('build :bar :percent (:elapsed seconds) '),
        clear: true,
        summary: false,
        customSummary: res => {
          process.stderr.write(chalk.blueBright('   '))
        }
      }
    ),
  ]
};