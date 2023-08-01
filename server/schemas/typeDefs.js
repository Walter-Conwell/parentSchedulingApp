const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    children: [String]!,
    is_teacher: Boolean,
    comments: [String]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID, profileName: String): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, is_teacher: Boolean): Auth
    login(email: String!, password: String!): Auth
    
    addChild(profileId: ID, profileName: String, childName: String!, teacherNames: [String]!, parents: [String]!, gradeLevel: Int!): Profile
    addComment(profileId: ID!, comment: String!): Profile
    removeProfile(profileId: ID): Profile
    removeComment(profileId: ID, comment: String!): Profile
  }
`;

module.exports = typeDefs;
