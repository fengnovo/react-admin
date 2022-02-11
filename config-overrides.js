const path = require('path');
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra')

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
)
