"use strict";

/**
 * report controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::report.report", ({ strapi }) => ({
  async getUserReports(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest();
    }

    const clients = await strapi.entityService.findMany("api::client.client", {
      filters: { users: user.id },
      populate: ["reports"],
    });

    const reports = clients.reduce((acc, client) => {
      if (client.reports && client.reports.length) {
        acc.push(...client.reports);
      }
      return acc;
    }, []);

    return reports;
  }
}));
