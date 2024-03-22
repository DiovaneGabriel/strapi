"use strict";

/**
 * client controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::client.client", ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest();
    }

    const clients = await strapi.entityService.findMany("api::client.client", {
      filters: { users: user.id },
      populate: ["reports"],
    });

    return clients;
  },
}));
