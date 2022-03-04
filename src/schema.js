const { gql } = require("apollo-server");

const typeDefs = gql`
  type Demo {
    id: Int!
    name: String!
    text: String!
  }

  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    allDemos: [Demo!]!
    demo(id: Int!): Demo
    allLinks: [Link!]!
    link(id: Int!): Demo
  }

  type Mutation {
    createDemo(name: String!, text: String!): Demo!
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;
