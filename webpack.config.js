const path = require ("path");

module.exports = {
	entry: path.resolve (__dirname, "./src/index.js"),
	// must provide abs path. The only non-manual way is
	// to use path library
	output: {
		path: path.resolve (__dirname, "./dist"),
		filename: "bundle.js"
	},
	devServer: {
		static: path.resolve (__dirname, "./dist")
	}
}