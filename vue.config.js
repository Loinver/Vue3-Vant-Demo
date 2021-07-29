const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.baseUrl,
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  indexPath: 'index.html',
  // 编译警告
  lintOnSave: true,
  configureWebpack: (config) => {
    if (isProduction) {
      // 开启gzip压缩
      const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[file].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
      config.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'], // 移除console
              },
            },
          }),
        ],
      };
    } else {
      // 开发环境配置
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('apis', resolve('src/apis'))
      .set('utils', resolve('src/utils'));
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
  },
  // 反向代理
  devServer: {
    port: 2081,
    host: '0.0.0.0',
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://121.40.254.159:15801',
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'http://121.40.254.159:15801',
        },
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
