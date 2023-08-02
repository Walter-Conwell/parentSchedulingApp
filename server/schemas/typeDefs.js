const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    children: [Child],
    is_teacher: Boolean,
    comments: [Comment]
  }

  type Child {
    _id: ID
    name: String
    teachers: [String]
    parents: [String]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID, profileName: String): Profile
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
