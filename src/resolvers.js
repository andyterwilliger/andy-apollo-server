const resolvers = {
  Query: {
    async allDemos(root, args, { models }) {
      return models.Demo.findAll();
    },
    async demo(root, { id }, { models }) {
      return models.Demo.findByPk(id);
    }
  },
  Mutation: {
    createDemo(root, { name, text }, { models }) {
      return models.Demo.create({ name, text });
    }
  }
};

module.exports = resolvers;
