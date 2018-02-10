const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: {
    main: "./js/index.js"
  },
  output: {
    filename: "[name]-bundle.js"
  },
  watch: true,
  plugins: [
    // https://www.youtube.com/watch?v=hB2YBV7w43s
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      files: [
        "./dist/*",
        "**/*.css",
        "**/*.html",
        "**/*.htm",
        "javascripts/*.js"
      ],
      server: { baseDir: ["."] }
    })
  ]
};
