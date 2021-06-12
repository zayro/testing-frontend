module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai"],
    basePath: "",
    files: ["./test/*.js"],
    exclude: ["karma.conf.js"],
    //    reporters: ["progress"],
    reporters: ["mocha", "html"],
    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: "html",
      },
    },
    htmlReporter: {
      outputDir: "karma_html",
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: null,
      urlFriendlyName: false,
      reportName: "report-summary-filename",
    },
    coverageReporter: {
      type: "html",
      dir: "coverage/",
    },
    browsers: ["Chrome"],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless"],
    autoWatch: true,
  });
};
