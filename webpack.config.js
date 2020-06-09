const path = require("path");
const SRC_PATH = path.join("/home/roohanjyot/Documents/Github/sortVisualizer/client/src");
const DIST_PATH = path.join("/home/roohanjyot/Documents/Github/sortVisualizer/client/dist");

module.exports = {
    entry: SRC_PATH,
    output: {
        path: DIST_PATH,
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            include: SRC_PATH,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          }
        ]
      },
    mode: "development"
};