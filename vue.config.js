let entry = process.argv.pop();
if (entry && entry.indexOf(".js") === -1) {
  entry = null;
}

module.exports = {
  publicPath: "",
  pages: {
    index: {
      entry: entry || "examples/questionnaire/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  devServer: {
    disableHostCheck: true,
  },
};
