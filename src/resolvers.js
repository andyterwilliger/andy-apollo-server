const link = require("../models/link");

const resolvers = {
  Query: {
    async allDemos(root, args, { models }) {
      return models.Demo.findAll();
    },
    async demo(root, { id }, { models }) {
      return models.Demo.findByPk(id);
    },
    //findByPk to return specific link with id
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    //add function to return all Links
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    createDemo(root, { name, text }, { models }) {
      return models.Demo.create({ name, text });
    },
    //create new link, url and slug required
    createLink(root, { url, slug }, { models }) {
      return models.Link.create({ url, slug });
    }
  }
};

module.exports = resolvers;
