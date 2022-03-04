const link = require("../models/link");

const resolvers = {
  Query: {
    async allDemos(root, args, { models }) {
      return models.Demo.findAll();
    },
    async demo(root, { id }, { models }) {
      return models.Demo.findByPk(id);
    },
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    createDemo(root, { name, text }, { models }) {
      return models.Demo.create({ name, text });
    },
    createLink(root, { url, slug }, { models }) {
      return models.Link.create({ url, slug });
    }
  }
};

module.exports = resolvers;
