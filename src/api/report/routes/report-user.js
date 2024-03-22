"use strict";

/**
 * report router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/reports/me",
      handler: "api::report.report.getUserReports",
    },
  ],
};
