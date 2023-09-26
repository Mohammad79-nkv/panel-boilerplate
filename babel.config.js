module.exports = {
    "plugins": [
      ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, "antd"],
      ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib"}, "antd-mobile"]
    ],
    presets: ["@babel/preset-env", "@babel/preset-react"]
  };