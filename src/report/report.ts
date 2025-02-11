const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "CUKETYPEAPI Report",
  pageTitle: "CUKETYPEAPI Report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Shruthi - PC",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "CUKETYPEAPI Report" },
      { label: "Release", value: "0.0.1" },
      { label: "Cycle", value: "Smoke-1" }
    ],
  },
});