const { gql } = require("apollo-server");

const typeDefs = gql`
  type Demo {
    id: Int!
    name: String!
    text: String!
  }

  type Query {
    allDemos: [Demo!]!
    demo(id: Int!): Demo
  }

  type Mutation {
    createDemo(name: String!, text: String!): Demo!
  }
`;

module.exports = typeDefs;
