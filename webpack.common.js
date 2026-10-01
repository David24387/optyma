const path = require("path");
module.exports = {
  entry: { "euromaster.optyma-popup": "./src/index.tsx" },
  module: { rules: [{ test: /\.tsx?$/, use: ["babel-loader"], exclude: /node_modules/ }] },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") }
};
