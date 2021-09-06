export const gistResolvers = {
  Query: {
    gists: async (_source, params, { dataSources }) => {
      return dataSources.gistService.getGists();
    },
    gist: async (_source, { id }, { dataSources }) => {
      return dataSources.gistService.getGist(id);
    },
  },
};
