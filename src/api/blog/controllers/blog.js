import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::articles.articles', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.entityService.findOne('api::articles.articles', id, {
        where:{
            id: id
        },
      populate: ['*'], // Populate relations if needed
    });

    return this.transformResponse(entity);
  },
}));
/////////// armushaobs