'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entities = await strapi.entityService.findMany('api::article.article', {
      ...query,
      populate: {
        Image: true, // Popula o campo de imagens
        localizations: {
          populate: {
            Image: true, // Popula as imagens das localizações
          },
        },
      },
    });
    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);

    return this.transformResponse(sanitizedEntities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    // Verifica se o parâmetro locale está presente
    const locale = query.locale ? query.locale : 'en';

    // Encontra a entidade com a localização especificada
    const entity = await strapi.entityService.findOne('api::article.article', id, {
      ...query,
      populate: {
        Image: true, // Popula o campo de imagens
        localizations: {
          populate: {
            Image: true, // Popula as imagens das localizações
          },
        },
      },
    });

    // Se a entidade tem localizações, encontra a tradução correspondente
    let localizedEntity = entity;
    if (entity.localizations && Array.isArray(entity.localizations)) {
      const foundLocalization = entity.localizations.find(
        (localization) => localization.locale === locale
      );
      localizedEntity = foundLocalization || entity;
    }

    const sanitizedEntity = await this.sanitizeOutput(localizedEntity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
