const path = require('path')
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#8994DF',
      // '@border-radius-base': '0',
      // '@border-radius-sm': '0'
    }
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({        
    "@": path.resolve(__dirname, "src"),        
  }),
  addWebpackPlugin(new FilterWarningsPlugin({
    exclude:
      /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
  })),
)
