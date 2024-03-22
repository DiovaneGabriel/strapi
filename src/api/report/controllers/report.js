"use strict";

/**
 * report controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::report.report", ({ strapi }) => ({
  async getUserReports(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest("Usuário não autenticado");
    }

    return { success: true };

    // // Supondo que a relação seja chamada 'clients'
    // const clients = await strapi.query('clients').find({ users: user.id });

    // return clients;
  }
}));
