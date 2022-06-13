const {
  override,
  addWebpackAlias,
  addLessLoader,
  adjustStyleLoaders,
  fixBabelImports
} = require("customize-cra");
const path = require("path");

module.exports = {
  webpack:  override(
    addWebpackAlias({
			'@': path.resolve('src')
		}),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#2C6FFD" }, // 修改antd主题色
      },
    }),
		adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
		// 针对antd实现按需打包
		fixBabelImports("import", {
			libraryName: "antd",
			libraryDirectory: "es",
			style: true, // 自动打包相关的样式
		}),
  )
}